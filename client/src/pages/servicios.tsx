import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Share2,
  Megaphone,
  Palette,
  Search,
  Settings,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description:
      "Administración profesional de perfiles empresariales en Facebook, Instagram, LinkedIn y TikTok.",
    focus:
      "Contenido que educa sobre transformación digital y uso de ERP/CRM.",
    includes: [
      "Calendario editorial",
      "Diseño de contenido",
      "Community management",
      "Reportes mensuales",
    ],
  },
  {
    icon: Megaphone,
    title: "Campañas Publicitarias Digitales",
    description:
      "Facebook Ads, Google Ads, Instagram Ads y TikTok Ads con enfoque en conversiones.",
    focus:
      "Campañas que generan leads directamente al CRM del cliente.",
    includes: [
      "Segmentación avanzada",
      "Creativos profesionales",
      "Optimización continua",
      "Seguimiento de conversiones",
    ],
  },
  {
    icon: Palette,
    title: "Diseño Gráfico y Branding",
    description:
      "Identidad visual, logotipos, papelería y material digital para tu empresa.",
    focus:
      "Diseño alineado con la imagen profesional que requiere un negocio digitalizado.",
    includes: [
      "Manual de marca",
      "Plantillas para redes",
      "Material corporativo",
      "Diseño publicitario",
    ],
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento Web",
    description:
      "Optimización para motores de búsqueda y contenido estratégico para tu sitio web.",
    focus:
      "Posicionar al cliente como referente en su industria.",
    includes: [
      "Auditoría SEO",
      "Keywords research",
      "Optimización on-page",
      "Link building",
    ],
  },
  {
    icon: Settings,
    title: "Implementación ERP/CRM",
    description:
      "Configuración e implementación del sistema de gestión empresarial E20 para tu empresa.",
    focus:
      "Este es nuestro diferenciador principal — no solo marketing, sino herramientas de gestión.",
    includes: [
      "Facturación electrónica (CFDI 4.0)",
      "CRM y gestión de clientes",
      "Inventarios y contabilidad",
      "Nómina y punto de venta",
    ],
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: "Consultoría en Transformación Digital",
    description:
      "Diagnóstico y plan de acción para digitalizar los procesos de tu negocio.",
    focus:
      "Unir marketing + gestión en una sola estrategia integral.",
    includes: [
      "Diagnóstico inicial",
      "Plan de transformación",
      "Acompañamiento continuo",
      "Medición de resultados",
    ],
  },
];

export default function Servicios() {
  return (
    <div>
      <section className="pt-28 pb-16 bg-[#111827]" data-testid="section-servicios-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-servicios-title">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales de marketing digital con enfoque en gestión empresarial ERP/CRM.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((svc, idx) => (
            <Card
              key={svc.title}
              className={`p-8 ${svc.highlight ? "border-primary/30 bg-primary/5 dark:bg-primary/5" : ""}`}
              data-testid={`card-service-detail-${idx}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-14 h-14 rounded-md flex items-center justify-center shrink-0 ${svc.highlight ? "bg-primary" : "bg-primary/10"}`}>
                  <svc.icon className={`w-7 h-7 ${svc.highlight ? "text-white" : "text-primary"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-bold text-foreground">{svc.title}</h2>
                    {svc.highlight && (
                      <Badge variant="default" className="text-xs">Diferenciador</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{svc.description}</p>
                  <div className="bg-primary/5 dark:bg-primary/10 rounded-md p-4 mb-5">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary font-semibold">Enfoque E20:</span>{" "}
                      {svc.focus}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Incluye:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="section-servicios-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contáctanos para una consulta personalizada sin costo.
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80"
              data-testid="button-servicios-cta"
            >
              Solicitar Consulta
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
