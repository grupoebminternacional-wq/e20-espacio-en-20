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
} from "lucide-react";

const SAAS_URL = "https://saas.e20.com.mx";
const CFDI_URL = "https://saas.e20.com.mx/cfdi/timbres";

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
    nombre: "Basico",
    precio: 499,
    periodo: "mes",
    descripcion: "Ideal para emprendedores y negocios que inician su digitalizacion.",
    caracteristicas: [
      "Facturacion electronica CFDI 4.0",
      "CRM basico",
      "Soporte por correo",
      "1 usuario incluido",
    ],
    urlRegistro: SAAS_URL,
  },
  {
    nombre: "Profesional",
    precio: 999,
    periodo: "mes",
    descripcion: "Para PYMEs que necesitan control total de su operacion.",
    caracteristicas: [
      "Todo lo del plan Basico",
      "Nomina y contabilidad",
      "Inventarios y compras",
      "Reportes avanzados",
      "5 usuarios incluidos",
      "Soporte prioritario",
    ],
    destacado: true,
    urlRegistro: SAAS_URL,
  },
  {
    nombre: "Empresarial",
    precio: 1999,
    periodo: "mes",
    descripcion: "Solucion completa para empresas con operaciones complejas.",
    caracteristicas: [
      "Todo lo del plan Profesional",
      "Conciliacion bancaria",
      "Multi-sucursal",
      "API de integracion",
      "Usuarios ilimitados",
      "Soporte dedicado 24/7",
    ],
    urlRegistro: SAAS_URL,
  },
];

const fallbackPaquetes: Paquete[] = [
  { nombre: "Mini", timbres: 10, precio: 100, precioUnitario: 10, urlCompra: CFDI_URL },
  { nombre: "Basico", timbres: 25, precio: 230, precioUnitario: 9.20, urlCompra: CFDI_URL },
  { nombre: "Estandar", timbres: 50, precio: 420, precioUnitario: 8.40, urlCompra: CFDI_URL },
  { nombre: "Profesional", timbres: 100, precio: 760, precioUnitario: 7.60, urlCompra: CFDI_URL },
  { nombre: "Empresarial", timbres: 500, precio: 3400, precioUnitario: 6.80, urlCompra: CFDI_URL },
  { nombre: "Corporativo", timbres: 1000, precio: 6000, precioUnitario: 6, urlCompra: CFDI_URL },
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

function PlanIcon({ name, className }: { name: string; className?: string }) {
  if (name === "Basico" || name === "Básico") return <Zap className={className} />;
  if (name === "Profesional") return <Star className={className} />;
  return <Crown className={className} />;
}

const planOrder = ["Básico", "Basico", "Profesional", "Empresarial"];

export default function ERP() {
  useEffect(() => {
    document.title = "ERP ContableMX - Sistema de Gestion Empresarial | Espacio en 20";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "ERP ContableMX: facturacion electronica CFDI 4.0, contabilidad, nomina, inventarios y CRM para PYMEs mexicanas. Planes desde $499 MXN/mes.");
    }
  }, []);

  const { data: planesData, isLoading: loadingPlanes } = useQuery<{ planes: Plan[] }>({
    queryKey: ["erp-planes"],
    queryFn: () => fetchExternal(`${SAAS_URL}/api/public/planes`),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const { data: modulosData, isLoading: loadingModulos } = useQuery<{ modulos: Modulo[] }>({
    queryKey: ["erp-modulos"],
    queryFn: () => fetchExternal(`${SAAS_URL}/api/public/modulos`),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const { data: paquetesData, isLoading: loadingPaquetes } = useQuery<{ paquetes: Paquete[] }>({
    queryKey: ["erp-paquetes"],
    queryFn: () => fetchExternal(`${SAAS_URL}/api/public/paquetes`),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const planes = planesData?.planes?.length ? planesData.planes : fallbackPlanes;
  const modulos = modulosData?.modulos || [];
  const paquetes = paquetesData?.paquetes?.length ? paquetesData.paquetes : fallbackPaquetes;

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
          <a href={SAAS_URL} target="_blank" rel="noopener noreferrer" data-testid="link-erp-hero-cta">
            <Button size="lg" data-testid="button-erp-hero-cta">
              Comenzar Ahora
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-erp-planes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-planes-title">
              Planes de Suscripcion
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-planes-description">
              Elige el plan que mejor se adapte a las necesidades de tu empresa.
              Todos incluyen soporte y actualizaciones.
            </p>
          </div>

          {loadingPlanes ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-96 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {planes
                .sort((a, b) => {
                  const ai = planOrder.indexOf(a.nombre);
                  const bi = planOrder.indexOf(b.nombre);
                  return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
                })
                .slice(0, 3)
                .map((plan, idx) => {
                  const isPopular = plan.destacado || plan.nombre === "Profesional";
                  return (
                    <Card
                      key={plan.nombre}
                      className={`relative p-8 flex flex-col ${
                        isPopular
                          ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                          : ""
                      }`}
                      data-testid={`card-plan-${idx}`}
                    >
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge variant="default" data-testid="badge-popular">
                            Mas Popular
                          </Badge>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <div
                          className={`w-14 h-14 rounded-md flex items-center justify-center mx-auto mb-4 ${
                            isPopular ? "bg-primary" : "bg-primary/10"
                          }`}
                        >
                          <PlanIcon
                            name={plan.nombre}
                            className={`w-7 h-7 ${isPopular ? "text-white" : "text-primary"}`}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-foreground" data-testid={`text-plan-name-${idx}`}>
                          {plan.nombre}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1" data-testid={`text-plan-desc-${idx}`}>
                          {plan.descripcion}
                        </p>
                      </div>
                      <div className="text-center mb-6">
                        <span className="text-4xl font-bold text-foreground" data-testid={`text-plan-price-${idx}`}>
                          {formatPrice(plan.precio)}
                        </span>
                        <span className="text-muted-foreground text-sm ml-1">
                          /{plan.periodo}
                        </span>
                      </div>
                      <div className="space-y-3 flex-1 mb-8">
                        {plan.caracteristicas.map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feat}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={plan.urlRegistro || SAAS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-plan-register-${idx}`}
                      >
                        <Button
                          className="w-full font-semibold"
                          variant={isPopular ? "default" : "outline"}
                          data-testid={`button-plan-${idx}`}
                        >
                          Registrarse
                          <ArrowRight className="w-4 h-4 ml-2" />
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
                  const unitPrice =
                    paq.precioUnitario ??
                    (paq.timbres > 0
                      ? Math.round((paq.precio / paq.timbres) * 100) / 100
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
                            {paq.timbres.toLocaleString("es-MX")} timbres
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
          <a href={SAAS_URL} target="_blank" rel="noopener noreferrer" data-testid="link-erp-bottom-cta">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80"
              data-testid="button-erp-bottom-cta"
            >
              Registrarse Gratis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
