import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Testimonial } from "@shared/schema";
import {
  Target,
  Monitor,
  BarChart3,
  Users,
  Share2,
  Megaphone,
  Palette,
  Search,
  Settings,
  Lightbulb,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const valueProps = [
  {
    icon: Target,
    title: "Marketing con propósito",
    description: "No solo publicidad, sino estrategia integrada con tu gestión empresarial.",
  },
  {
    icon: Monitor,
    title: "Tecnología ERP/CRM",
    description: "Implementamos sistemas que automatizan tu operación día a día.",
  },
  {
    icon: BarChart3,
    title: "Resultados medibles",
    description: "Cada campaña conectada a datos reales de tu negocio.",
  },
  {
    icon: Users,
    title: "Acompañamiento total",
    description: "Desde la estrategia hasta la ejecución, estamos contigo.",
  },
];

const featuredServices = [
  { icon: Share2, title: "Redes Sociales", desc: "Gestión profesional de perfiles empresariales" },
  { icon: Megaphone, title: "Campañas Publicitarias", desc: "Facebook Ads, Google Ads y más" },
  { icon: Palette, title: "Diseño y Branding", desc: "Identidad visual profesional" },
  { icon: Search, title: "SEO", desc: "Posicionamiento en buscadores" },
  { icon: Settings, title: "ERP/CRM", desc: "Sistemas de gestión empresarial" },
  { icon: Lightbulb, title: "Consultoría Digital", desc: "Transformación digital integral" },
];

const stats = [
  { label: "Empresas transformadas", value: 50 },
  { label: "Campañas ejecutadas", value: 170 },
  { label: "Años de experiencia", value: 8 },
  { label: "Crecimiento promedio", value: 40, suffix: "%" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}
      {suffix && <span>{suffix}</span>}
      {!suffix && <span>+</span>}
    </div>
  );
}

export default function Home() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const displayTestimonials = testimonials || [];
  const total = displayTestimonials.length;

  const next = () => setCurrentTestimonial((p) => (p + 1) % total);
  const prev = () => setCurrentTestimonial((p) => (p - 1 + total) % total);

  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center" data-testid="section-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.png)", filter: "brightness(1.23)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/75 via-[#111827]/55 to-[#111827]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-md px-3 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-xs font-medium uppercase tracking-wider">
                Agencia de Marketing Digital
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
              Transformamos tu negocio con estrategia digital e inteligencia empresarial
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl" data-testid="text-hero-subtitle">
              Agencia de marketing digital especializada en implementación de ERP/CRM para PYMEs mexicanas.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contacto">
                <Button size="lg" className="bg-primary text-primary-foreground border-primary-border" data-testid="button-hero-cta">
                  Solicitar Consulta Gratuita
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-services">
                  Conocer Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-why-e20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ¿Por qué E20?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinamos estrategia digital con gestión empresarial para ofrecer resultados reales a tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item) => (
              <Card key={item.title} className="p-6 text-center hover-elevate" data-testid={`card-value-${item.title}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card dark:bg-background" data-testid="section-featured-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Servicios destacados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales para impulsar el crecimiento de tu empresa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((svc) => (
              <Card key={svc.title} className="p-6 hover-elevate" data-testid={`card-service-${svc.title}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground">{svc.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/servicios">
              <Button variant="outline" data-testid="button-all-services">
                Ver todos los servicios
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111827]" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Cifras de impacto
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Números que respaldan nuestro compromiso con el crecimiento de nuestros clientes.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-testimonials-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Historias reales de empresas que han transformado su negocio con E20.
            </p>
          </div>

          {isLoading ? (
            <div className="max-w-2xl mx-auto">
              <Skeleton className="h-48 w-full rounded-md" />
            </div>
          ) : total > 0 ? (
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: displayTestimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#d4a853] fill-[#d4a853]" />
                  ))}
                </div>
                <blockquote className="text-center text-foreground text-lg leading-relaxed mb-6" data-testid="text-testimonial-quote">
                  &ldquo;{displayTestimonials[currentTestimonial].quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                      {displayTestimonials[currentTestimonial].fullName
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {displayTestimonials[currentTestimonial].fullName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {displayTestimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <Button size="icon" variant="outline" onClick={prev} data-testid="button-testimonial-prev">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    {currentTestimonial + 1} / {total}
                  </span>
                  <Button size="icon" variant="outline" onClick={next} data-testid="button-testimonial-next">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-cta-final">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Agenda una llamada con nuestro equipo y descubre cómo podemos impulsar tu empresa.
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80 hover:bg-white/90"
              data-testid="button-cta-final"
            >
              Agendar una llamada
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
