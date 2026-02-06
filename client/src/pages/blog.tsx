import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight, Search } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const blogCategories = [
  "Todos",
  "Marketing Digital",
  "ERP/CRM",
  "Transformación Digital",
  "Redes Sociales",
  "Facturación Electrónica",
  "Casos de Éxito",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const filtered = posts?.filter((post) => {
    const matchesCategory =
      activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="pt-28 pb-16 bg-[#111827]" data-testid="section-blog-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-blog-title">
            Blog E20
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Artículos, guías y tendencias sobre marketing digital y gestión empresarial.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-blog-search"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                {blogCategories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    data-testid={`button-blog-cat-${cat}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              {isLoading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-40 rounded-md" />
                  ))}
                </div>
              ) : filtered && filtered.length > 0 ? (
                <div className="space-y-6">
                  {filtered.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-visible hover-elevate"
                      data-testid={`card-blog-${post.id}`}
                    >
                      <div className="flex flex-col sm:flex-row">
                        {post.imageUrl && (
                          <div className="sm:w-56 h-48 sm:h-auto overflow-hidden rounded-t-md sm:rounded-l-md sm:rounded-tr-none shrink-0">
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {post.createdAt
                                ? new Date(post.createdAt).toLocaleDateString("es-MX", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })
                                : ""}
                            </span>
                          </div>
                          <h2 className="text-lg font-bold text-foreground mb-2">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                          <Button variant="ghost" size="sm" className="text-primary p-0 h-auto" data-testid={`button-read-${post.id}`}>
                            Leer más
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No se encontraron artículos.
                  </p>
                </div>
              )}
            </div>

            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
                    Categorías
                  </h3>
                  <div className="space-y-1">
                    {blogCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeCategory === cat
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        data-testid={`button-sidebar-cat-${cat}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <Card className="p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-3">
                    Newsletter
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Recibe nuestros artículos más recientes en tu correo.
                  </p>
                  <Input
                    placeholder="Tu email"
                    type="email"
                    className="mb-2"
                    data-testid="input-newsletter-email"
                  />
                  <Button className="w-full" size="sm" data-testid="button-newsletter-subscribe">
                    Suscribirme
                  </Button>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
