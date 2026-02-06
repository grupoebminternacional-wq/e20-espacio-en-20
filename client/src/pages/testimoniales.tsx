import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Quote, ArrowRight } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Testimoniales() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div>
      <section className="pt-28 pb-16 bg-[#111827]" data-testid="section-testimoniales-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-testimoniales-title">
            Lo que dicen nuestros clientes
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Historias reales de transformación empresarial.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-64 rounded-md" />
              ))}
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <Card key={t.id} className="p-6" data-testid={`card-testimonial-${t.id}`}>
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-8 h-8 text-primary/20 shrink-0" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#d4a853] fill-[#d4a853]" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-foreground leading-relaxed mb-6" data-testid={`text-quote-${t.id}`}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between gap-4 pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                          {t.fullName
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {t.fullName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.company}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {t.service}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Pronto compartiremos las experiencias de nuestros clientes.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="section-testimoniales-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Quieres compartir tu experiencia con E20?
          </h2>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80"
              data-testid="button-testimoniales-cta"
            >
              Contáctanos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
