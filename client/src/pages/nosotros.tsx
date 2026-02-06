import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Lightbulb,
  Handshake,
  Eye,
  BarChart3,
  Zap,
  ArrowRight,
  Target,
  Rocket,
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovación", desc: "Siempre a la vanguardia tecnológica." },
  { icon: Handshake, title: "Compromiso", desc: "Tu éxito es nuestro éxito." },
  { icon: Eye, title: "Transparencia", desc: "Comunicación clara y honesta." },
  { icon: BarChart3, title: "Resultados", desc: "Enfocados en métricas reales." },
  { icon: Zap, title: "Todo Automatizado", desc: "Procesos eficientes y digitales." },
];

const team = [
  { name: "Carlos Mendoza", role: "Director General", initials: "CM" },
  { name: "Ana García", role: "Directora de Marketing", initials: "AG" },
  { name: "Roberto Silva", role: "Director de Tecnología", initials: "RS" },
  { name: "María López", role: "Diseñadora Senior", initials: "ML" },
];

export default function Nosotros() {
  return (
    <div>
      <section className="pt-28 pb-16 bg-[#111827]" data-testid="section-nosotros-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-nosotros-title">
            Quiénes Somos
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Una agencia que entiende que el marketing efectivo empieza con una operación eficiente.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Espacio en 20 nació de una convicción: las PYMEs mexicanas merecen las mismas
                  herramientas digitales que las grandes corporaciones, pero adaptadas a su realidad
                  y presupuesto.
                </p>
                <p>
                  Nos dimos cuenta de que el marketing digital tradicional no era suficiente.
                  Las empresas necesitaban no solo presencia en línea, sino sistemas que
                  organizaran su operación desde adentro.
                </p>
                <p>
                  Así nació nuestra visión de unir el marketing digital con la gestión empresarial
                  a través de sistemas ERP/CRM, creando una solución integral que realmente
                  transforma negocios.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Misión</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Empoderar a las PYMEs mexicanas con herramientas digitales de marketing y
                      gestión empresarial que impulsen su crecimiento sostenible.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visión</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ser la agencia líder en México que integra marketing digital con soluciones
                      ERP/CRM, transformando la manera en que las PYMEs operan y crecen.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((v) => (
                <Card key={v.title} className="p-5 text-center hover-elevate" data-testid={`card-value-${v.title}`}>
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Nuestro Equipo
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center" data-testid={`card-team-${member.initials}`}>
                  <Avatar className="w-20 h-20 mx-auto mb-3">
                    <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="section-nosotros-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Trabaja con un equipo apasionado por la transformación digital.
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80"
              data-testid="button-nosotros-cta"
            >
              Contactar al equipo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
