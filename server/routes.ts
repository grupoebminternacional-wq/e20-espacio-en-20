import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.get("/api/blog", async (_req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get("/api/portfolio", async (_req, res) => {
    const items = await storage.getPortfolioItems();
    res.json(items);
  });

  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    const contact = await storage.createContact(parsed.data);
    res.json(contact);
  });

  app.get("/api/paquetes", async (_req, res) => {
    try {
      const response = await fetch(
        "https://contable-mx-grupoebminterna.replit.app/api/ext/v1/paquetes"
      );
      if (!response.ok) {
        return res.status(502).json({ paquetes: [], error: "upstream error" });
      }
      const data = await response.json();
      const paquetes: any[] = data.paquetes ?? [];

      const hasBasico = paquetes.some((p: any) => p.cantidad === 25);
      if (!hasBasico) {
        paquetes.push({
          priceId: "basico-25",
          nombre: "Paquete Básico - 25 Timbres",
          cantidad: 25,
          precioTotal: 237.50,
          precioTimbre: 9.50,
          moneda: "MXN",
          incluyeIVA: true,
        });
      }

      paquetes.sort((a: any, b: any) => a.cantidad - b.cantidad);
      res.json({ ...data, paquetes, total: paquetes.length });
    } catch {
      res.status(502).json({ paquetes: [], error: "upstream unavailable" });
    }
  });

  return httpServer;
}
