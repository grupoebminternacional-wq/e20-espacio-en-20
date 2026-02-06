import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Servicios from "@/pages/servicios";
import Nosotros from "@/pages/nosotros";
import Portafolio from "@/pages/portafolio";
import Blog from "@/pages/blog";
import Testimoniales from "@/pages/testimoniales";
import Contacto from "@/pages/contacto";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/portafolio" component={Portafolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/testimoniales" component={Testimoniales} />
      <Route path="/contacto" component={Contacto} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
