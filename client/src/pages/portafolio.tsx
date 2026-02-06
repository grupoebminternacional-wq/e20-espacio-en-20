import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { PortfolioItem } from "@shared/schema";

const categories = [
  "Todos",
  "Redes Sociales",
  "Campañas",
  "Branding",
  "ERP/CRM",
  "SEO",
  "Desarrollo de Software",
];

export default function Portafolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const { data: items, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const filtered =
    activeFilter === "Todos"
      ? items
      : items?.filter((item) => item.category === activeFilter);

  return (
    <div>
      <section className="pt-28 pb-16 bg-[#111827]" data-testid="section-portafolio-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-portafolio-title">
            Nuestro Trabajo
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Casos de éxito que demuestran resultados reales.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-testid="portfolio-filters">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(cat)}
                data-testid={`button-filter-${cat}`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-72 rounded-md" />
              ))}
            </div>
          ) : filtered && filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-visible hover-elevate"
                  data-testid={`card-portfolio-${item.id}`}
                >
                  {item.imageUrl && (
                    <div className="h-48 overflow-hidden rounded-t-md">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.client}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 bg-primary/5 dark:bg-primary/10 rounded-md p-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {item.result}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.services.map((s) => (
                        <Badge key={s} variant="outline" className="text-xs">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No hay proyectos en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="section-portafolio-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Quieres que tu empresa sea el siguiente caso de éxito?
          </h2>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold border-white/80"
              data-testid="button-portafolio-cta"
            >
              Iniciar proyecto
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
