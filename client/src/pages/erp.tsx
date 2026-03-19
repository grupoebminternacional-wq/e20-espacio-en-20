import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  Wallet,
  Package,
  Calculator,
  ShoppingCart,
  CreditCard,
  Building,
  BarChart3,
  QrCode,
  Star,
  Zap,
  Crown,
  Stamp,
  ExternalLink,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";

const CONTABLEMX_URL = "https://contablemx.e20.com.mx";
const CONTABLEMX_REGISTRO = "https://contablemx.e20.com.mx/registro";
const CFDI_URL = "https://contablemx.e20.com.mx/cfdi/timbres";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Users,
  Wallet,
  Package,
  Calculator,
  ShoppingCart,
  CreditCard,
  Building,
  BarChart3,
  QrCode,
};

interface Plan {
  nombre: string;
  precio: number;
  periodo: string;
  descripcion: string;
  caracteristicas: string[];
  destacado?: boolean;
  urlRegistro: string;
  categoria: string;
  etiqueta: string;
  botonTexto: string;
  botonColor: "green" | "blue" | "orange";
}

interface Modulo {
  nombre: string;
  descripcion: string;
  icono: string;
  incluido: string[];
}

interface Paquete {
  nombre: string;
  timbres: number;
  precio: number;
  precioUnitario?: number;
  descripcion?: string;
  urlCompra: string;
}

const fallbackPlanes: Plan[] = [
  {
    nombre: "PRUEBA GRATUITA",
    precio: 0,
    periodo: "100 dias de prueba",
    descripcion: "",
    categoria: "ERP - INICIO",
    etiqueta: "ERP - INICIO",
    caracteristicas: [
      "6 Timbres de regalo",
      "Modulo Facturacion",
      "Recompra libre",
      "Asistencia IA",
    ],
    urlRegistro: CONTABLEMX_REGISTRO,
    botonTexto: "PROBAR GRATIS",
    botonColor: "green",
  },
  {
    nombre: "PROFESIONISTAS",
    precio: 500,
    periodo: "anual",
    descripcion: "",
    categoria: "ERP - INDEPENDIENTE",
    etiqueta: "ERP - INDEPENDIENTE",
    caracteristicas: [
      "Ideal 1 Factura al mes",
      "Cobro de comisiones",
      "Facturacion Digital",
      "Asistencia IA",
    ],
    urlRegistro: CONTABLEMX_URL,
    botonTexto: "PLAN ANUAL",
    botonColor: "green",
  },
  {
    nombre: "BASICO",
    precio: 499,
    periodo: "mensual",
    descripcion: "",
    categoria: "ERP - EMPRESA",
    etiqueta: "ERP - EMPRESA",
    caracteristicas: [
      "Asistencia Personalizada",
      "Alta por SEFINPAT",
      "Modulos Configurados",
      "Gestion Usuarios",
    ],
    urlRegistro: CONTABLEMX_URL,
    botonTexto: "CONTRATAR",
    botonColor: "blue",
  },
  {
    nombre: "PROFESIONAL",
    precio: 999,
    periodo: "mensual",
    descripcion: "",
    categoria: "ERP - AVANZADO",
    etiqueta: "ERP - AVANZADO",
    destacado: true,
    caracteristicas: [
      "Asistencia Personalizada",
      "Automatizacion Full",
      "Gestion Multitarea",
      "Control Inventarios",
    ],
    urlRegistro: CONTABLEMX_URL,
    botonTexto: "CONTRATAR",
    botonColor: "green",
  },
  {
    nombre: "EMPRESARIAL",
    precio: 1999,
    periodo: "mensual",
    descripcion: "",
    categoria: "ERP - CORPORATIVO",
    etiqueta: "ERP - CORPORATIVO",
    caracteristicas: [
      "Asistencia Personalizada",
      "Estrategia Ilimitada",
      "Todos los Modulos",
      "Soporte 24/7 Premium",
    ],
    urlRegistro: CONTABLEMX_URL,
    botonTexto: "CONTRATAR",
    botonColor: "green",
  },
  {
    nombre: "PRUEBA CRM",
    precio: 0,
    periodo: "30 dias de prueba",
    descripcion: "",
    categoria: "CRM - INICIO",
    etiqueta: "CRM - INICIO",
    caracteristicas: [
      "Lanzar Campanas",
      "Modulo Ventas Unico",
      "Facil y Simple",
      "Practica Prospectos",
    ],
    urlRegistro: CONTABLEMX_REGISTRO,
    botonTexto: "PROBAR CRM",
    botonColor: "orange",
  },
  {
    nombre: "CRM BASICO",
    precio: 399,
    periodo: "mensual",
    descripcion: "",
    categoria: "CRM - ESENCIAL",
    etiqueta: "CRM - ESENCIAL",
    caracteristicas: [
      "Gestion de Prospectos",
      "Embudo de Ventas",
      "Seguimiento Email",
      "Reportes Basicos",
    ],
    urlRegistro: CONTABLEMX_URL,
    botonTexto: "ADQUIRIR CRM",
    botonColor: "blue",
  },
  {
    nombre: "CRM PRO",
    precio: 799,
    periodo: "mensual",
    descripcion: "",
    categoria: "CRM - FULL IMPACTO",
    etiqueta: "CRM - FULL IMPACTO",
    caracteristicas: [
      "Todas Redes Sociales",
      "Lanzamiento Formatos",
      "Publicidad Total",
      "Automatizacion Full",
    ],
    urlRegistro: CONTABLEMX_URL,
    botonTexto: "CONTRATAR PRO",
    botonColor: "orange",
  },
];

const fallbackPaquetes: Paquete[] = [
  { nombre: "Paquete Mini", timbres: 10, precio: 100, precioUnitario: 10, urlCompra: CFDI_URL },
  { nombre: "Paquete Básico", timbres: 25, precio: 237.50, precioUnitario: 9.50, urlCompra: CFDI_URL },
  { nombre: "Paquete Estándar", timbres: 50, precio: 450, precioUnitario: 9, urlCompra: CFDI_URL },
  { nombre: "Paquete Profesional", timbres: 100, precio: 880, precioUnitario: 8.80, urlCompra: CFDI_URL },
  { nombre: "Paquete Empresarial", timbres: 500, precio: 4200, precioUnitario: 8.40, urlCompra: CFDI_URL },
  { nombre: "Paquete Corporativo", timbres: 1000, precio: 8000, precioUnitario: 8, urlCompra: CFDI_URL },
];

async function fetchExternal<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return res.json();
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function PlanIcon({ categoria, className }: { categoria: string; className?: string }) {
  if (categoria.includes("INICIO")) return <Zap className={className} />;
  if (categoria.includes("INDEPENDIENTE")) return <Rocket className={className} />;
  if (categoria.includes("EMPRESA")) return <Building className={className} />;
  if (categoria.includes("AVANZADO")) return <Star className={className} />;
  if (categoria.includes("CORPORATIVO")) return <Crown className={className} />;
  if (categoria.includes("ESENCIAL")) return <Target className={className} />;
  if (categoria.includes("FULL IMPACTO")) return <TrendingUp className={className} />;
  return <Zap className={className} />;
}

const colorHexMap: Record<string, string> = {
  green: "#22c55e",
  blue: "#3b82f6",
  orange: "#f97316",
};

function getColorHex(color: string): string {
  return colorHexMap[color] ?? "#22c55e";
}

export default function ERP() {
  useEffect(() => {
    document.title = "ERP ContableMX - Sistema de Gestion Empresarial | Espacio en 20";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "ERP ContableMX: facturacion electronica CFDI 4.0, contabilidad, nomina, inventarios, CRM y marketing para PYMEs mexicanas. Planes ERP desde $0 y CRM desde $399 MXN/mes.");
    }
  }, []);

  const { data: planesData, isLoading: loadingPlanes } = useQuery<{ planes: Plan[] }>({
    queryKey: ["erp-planes"],
    queryFn: () => fetchExternal(`${CONTABLEMX_URL}/api/public/planes`),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const { data: modulosData, isLoading: loadingModulos } = useQuery<{ modulos: Modulo[] }>({
    queryKey: ["erp-modulos"],
    queryFn: () => fetchExternal(`${CONTABLEMX_URL}/api/public/modulos`),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const { data: paquetesData, isLoading: loadingPaquetes } = useQuery<{ paquetes: Paquete[] }>({
    queryKey: ["erp-paquetes"],
    queryFn: () => fetchExternal(`${CONTABLEMX_URL}/api/public/paquetes`),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const apiPlanes = planesData?.planes;
  const planes = (apiPlanes && apiPlanes.length >= 8 && apiPlanes.every((p: any) => p.categoria && p.botonTexto))
    ? apiPlanes
    : fallbackPlanes;
  const modulos = modulosData?.modulos || [];
  const apiPaquetes = paquetesData?.paquetes;
  const paquetes = (apiPaquetes && apiPaquetes.length > 0 && apiPaquetes.every((p: any) => typeof p.timbres === "number"))
    ? apiPaquetes
    : fallbackPaquetes;

  return (
    <div>
      <section className="pt-28 pb-16 bg-[#111827]" data-testid="section-erp-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4" data-testid="badge-producto-estrella">
            Producto Estrella
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            data-testid="text-erp-title"
          >
            ERP ContableMX
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8" data-testid="text-erp-description">
            Sistema integral de gestion empresarial: facturacion electronica CFDI 4.0,
            contabilidad, nomina, inventarios, CRM y mas. Todo en la nube, listo para tu PYME.
          </p>
          <a href={CONTABLEMX_REGISTRO} target="_blank" rel="noopener noreferrer" data-testid="link-erp-hero-cta">
            <Button size="lg" data-testid="button-erp-hero-cta">
              PROBAR GRATIS
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-erp-planes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-planes-title">
              Planes y Precios
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-planes-description">
              Elige el plan que mejor se adapte a las necesidades de tu empresa.
              Todos incluyen soporte y actualizaciones.
            </p>
          </div>

          {loadingPlanes ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-96 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {planes.map((plan, idx) => {
                const p = plan as Plan;
                const color = p.botonColor || "green";
                const categoria = p.categoria || p.etiqueta || "";
                const botonTexto = p.botonTexto || "CONTRATAR";
                const urlRegistro = p.urlRegistro || CONTABLEMX_URL;

                return (
                  <Card
                    key={`${plan.nombre}-${idx}`}
                    className={`relative overflow-hidden p-6 flex flex-col ${
                      plan.destacado ? "shadow-lg shadow-primary/10 scale-[1.01]" : ""
                    }`}
                    data-testid={`card-plan-${idx}`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: getColorHex(color) }} />
                    <div className="text-center mb-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3" data-testid={`text-plan-categoria-${idx}`}>
                        {categoria}
                      </p>
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <PlanIcon
                          categoria={categoria}
                          className="w-6 h-6 text-primary"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-foreground" data-testid={`text-plan-name-${idx}`}>
                        {plan.nombre}
                      </h3>
                    </div>
                    <div className="text-center mb-2">
                      <span className="text-3xl font-bold text-foreground" data-testid={`text-plan-price-${idx}`}>
                        ${plan.precio.toLocaleString("es-MX")}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mb-4 uppercase" data-testid={`text-plan-periodo-${idx}`}>
                      {plan.periodo}
                    </p>
                    <div className="space-y-2.5 flex-1 mb-6">
                      {plan.caracteristicas.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={urlRegistro}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-plan-register-${idx}`}
                    >
                      <Button
                        className="w-full font-bold text-sm"
                        style={{ backgroundColor: getColorHex(color), borderColor: getColorHex(color), color: "#fff" }}
                        data-testid={`button-plan-${idx}`}
                      >
                        {botonTexto}
                      </Button>
                    </a>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section
        className="py-20 bg-muted/30 dark:bg-muted/10"
        data-testid="section-erp-modulos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-modulos-title">
              Modulos del Sistema
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-modulos-description">
              Conoce los 10 modulos que componen ERP ContableMX y descubre cuales
              estan incluidos en cada plan.
            </p>
          </div>

          {loadingModulos ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {modulos.map((mod, idx) => {
                const Icon = iconMap[mod.icono] || FileText;
                return (
                  <Card
                    key={mod.nombre}
                    className="p-6"
                    data-testid={`card-modulo-${idx}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1" data-testid={`text-modulo-name-${idx}`}>
                          {mod.nombre}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3" data-testid={`text-modulo-desc-${idx}`}>
                          {mod.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {mod.incluido.map((plan) => (
                            <Badge
                              key={plan}
                              variant={plan === "Empresarial" ? "default" : "secondary"}
                              className="text-xs"
                              data-testid={`badge-modulo-${idx}-${plan.toLowerCase()}`}
                            >
                              {plan}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-erp-paquetes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-paquetes-title">
              Paquetes de Timbres CFDI
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-paquetes-description">
              Adquiere timbres fiscales para tu facturacion electronica.
              Sin fecha de caducidad, usa tus timbres cuando los necesites.
            </p>
          </div>

          {loadingPaquetes ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {paquetes
                .sort((a, b) => a.precio - b.precio)
                .map((paq, idx) => {
                  const timbres = paq.timbres ?? 0;
                  const precio = paq.precio ?? 0;
                  const unitPrice =
                    paq.precioUnitario ??
                    (timbres > 0
                      ? Math.round((precio / timbres) * 100) / 100
                      : 0);
                  return (
                    <Card
                      key={paq.nombre}
                      className="p-6 flex flex-col"
                      data-testid={`card-paquete-${idx}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <Stamp className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground" data-testid={`text-paquete-name-${idx}`}>
                            {paq.nombre}
                          </h3>
                          <p className="text-xs text-muted-foreground" data-testid={`text-paquete-timbres-${idx}`}>
                            {timbres.toLocaleString("es-MX")} timbres
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-foreground" data-testid={`text-paquete-price-${idx}`}>
                          {formatPrice(paq.precio)}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          MXN
                        </span>
                      </div>
                      {unitPrice > 0 && (
                        <p className="text-xs text-muted-foreground mb-4" data-testid={`text-paquete-unit-${idx}`}>
                          {formatPrice(unitPrice)} por timbre
                        </p>
                      )}
                      <div className="mt-auto">
                        <a
                          href={paq.urlCompra || CFDI_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-paquete-${idx}`}
                        >
                          <Button
                            variant="outline"
                            className="w-full font-semibold"
                            data-testid={`button-paquete-${idx}`}
                          >
                            Comprar Timbres
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </Card>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="section-erp-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" data-testid="text-erp-cta-title">
            Digitaliza tu empresa hoy
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto" data-testid="text-erp-cta-description">
            Prueba ERP ContableMX sin compromiso. Registrate y comienza a
            facturar, administrar y crecer con tecnologia mexicana.
          </p>
          <a href={CONTABLEMX_REGISTRO} target="_blank" rel="noopener noreferrer" data-testid="link-erp-bottom-cta">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80"
              data-testid="button-erp-bottom-cta"
            >
              PROBAR GRATIS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
