import { db } from "./db";
import { eq } from "drizzle-orm";
import { blogPosts, portfolioItems, testimonials } from "@shared/schema";

async function ensureCIEPortfolioItem() {
  const existing = await db.select().from(portfolioItems).where(eq(portfolioItems.title, 'CIE - Comunicación Interna de la Empresa'));
  if (existing.length === 0) {
    await db.insert(portfolioItems).values({
      title: "CIE - Comunicación Interna de la Empresa",
      client: "Visual World Ópticas",
      category: "Desarrollo de Software",
      description: "Red social corporativa exclusiva con capas de seguridad para mantener la comunicación dentro de la empresa. Funciona solo en horario laboral y mantiene la capacitación continua del personal, creando un ambiente de trabajo armónico y ahorrando tiempo y dinero en la capacitación de empleados.",
      result: "Comunicación segura y capacitación continua",
      services: ["Desarrollo de Software", "Consultoría Digital", "ERP/CRM"],
    });
    console.log("CIE portfolio item inserted");
  }
}

export async function seed() {
  await ensureCIEPortfolioItem();

  const existingTestimonials = await db.select().from(testimonials);
  if (existingTestimonials.length > 0) return;

  await db.insert(testimonials).values([
    {
      fullName: "Laura Hernández",
      company: "Comercializadora del Norte",
      service: "ERP/CRM",
      rating: 5,
      quote: "E20 transformó completamente nuestra operación. Pasamos de llevar todo en hojas de cálculo a un sistema ERP profesional. Nuestras ventas crecieron un 35% en 6 meses.",
    },
    {
      fullName: "Miguel Ángel Torres",
      company: "Restaurantes La Tradición",
      service: "Redes Sociales",
      rating: 5,
      quote: "La gestión de redes sociales que hace E20 nos ha dado una presencia digital que nunca imaginamos. Nuestros seguidores crecieron un 400% y las reservaciones en línea se triplicaron.",
    },
    {
      fullName: "Patricia Morales",
      company: "Consultores PM",
      service: "Campañas Publicitarias",
      rating: 4,
      quote: "Las campañas publicitarias de E20 generan leads de calidad. Cada peso invertido en publicidad está conectado a nuestro CRM, lo que nos permite medir el retorno real.",
    },
    {
      fullName: "Roberto Jiménez",
      company: "Ferretería Industrial RJ",
      service: "Consultoría Digital",
      rating: 5,
      quote: "La consultoría de transformación digital de E20 nos abrió los ojos. Ahora tenemos procesos digitalizados que nos ahorran 20 horas a la semana en tareas administrativas.",
    },
  ]);

  await db.insert(blogPosts).values([
    {
      title: "¿Por qué tu PYME necesita un CRM en 2025?",
      slug: "pyme-necesita-crm-2025",
      excerpt: "Descubre cómo un CRM puede transformar la relación con tus clientes y aumentar tus ventas de manera significativa.",
      content: "Un CRM (Customer Relationship Management) es mucho más que una base de datos de clientes. Es una herramienta estratégica que permite a las PYMEs mexicanas competir con las grandes empresas...",
      category: "ERP/CRM",
      imageUrl: "/images/hero-bg.png",
    },
    {
      title: "5 errores que cometen las PYMEs en redes sociales",
      slug: "errores-pymes-redes-sociales",
      excerpt: "Evita estos errores comunes que impiden que tu negocio crezca en plataformas digitales.",
      content: "Las redes sociales son una herramienta poderosa para las PYMEs, pero muchos negocios cometen errores que limitan su crecimiento digital...",
      category: "Redes Sociales",
      imageUrl: "/images/hero-bg.png",
    },
    {
      title: "Cómo la facturación electrónica puede ahorrarle tiempo a tu negocio",
      slug: "facturacion-electronica-ahorro-tiempo",
      excerpt: "La facturación electrónica CFDI 4.0 no es solo una obligación fiscal, es una oportunidad para optimizar tu operación.",
      content: "La implementación del CFDI 4.0 ha sido un reto para muchas PYMEs mexicanas. Sin embargo, cuando se integra correctamente con un sistema ERP...",
      category: "Facturación Electrónica",
      imageUrl: "/images/hero-bg.png",
    },
    {
      title: "Marketing digital + ERP: La combinación que transforma empresas",
      slug: "marketing-digital-erp-transformacion",
      excerpt: "Descubre por qué las empresas más exitosas integran su marketing digital con sistemas de gestión empresarial.",
      content: "En E20 hemos descubierto que el marketing digital aislado tiene un techo. Las campañas más exitosas son aquellas que están conectadas con la operación real del negocio...",
      category: "Transformación Digital",
      imageUrl: "/images/hero-bg.png",
    },
  ]);

  await db.insert(portfolioItems).values([
    {
      title: "Transformación Digital Completa",
      client: "Comercializadora del Norte",
      category: "ERP/CRM",
      description: "Implementación integral de ERP/CRM con migración de datos, capacitación y campañas digitales para una comercializadora con 15 años de operación.",
      result: "+35% en ventas en 6 meses",
      services: ["ERP/CRM", "Consultoría Digital", "Campañas Publicitarias"],
    },
    {
      title: "Estrategia de Redes Sociales",
      client: "Restaurantes La Tradición",
      category: "Redes Sociales",
      description: "Gestión completa de redes sociales con enfoque en engagement y generación de reservaciones para cadena de restaurantes.",
      result: "+400% seguidores, 3x reservaciones",
      services: ["Redes Sociales", "Diseño y Branding"],
    },
    {
      title: "Rebranding Corporativo",
      client: "Consultores PM",
      category: "Branding",
      description: "Rediseño completo de identidad visual, manual de marca y material corporativo para firma de consultoría.",
      result: "Imagen profesional renovada",
      services: ["Diseño y Branding", "SEO"],
    },
    {
      title: "Campañas de Generación de Leads",
      client: "Ferretería Industrial RJ",
      category: "Campañas",
      description: "Campañas publicitarias en Google Ads y Facebook Ads con integración directa al CRM para seguimiento de cada lead.",
      result: "150+ leads calificados por mes",
      services: ["Campañas Publicitarias", "ERP/CRM"],
    },
    {
      title: "CIE - Comunicación Interna de la Empresa",
      client: "Visual World Ópticas",
      category: "Desarrollo de Software",
      description: "Red social corporativa exclusiva con capas de seguridad para mantener la comunicación dentro de la empresa. Funciona solo en horario laboral y mantiene la capacitación continua del personal, creando un ambiente de trabajo armónico y ahorrando tiempo y dinero en la capacitación de empleados.",
      result: "Comunicación segura y capacitación continua",
      services: ["Desarrollo de Software", "Consultoría Digital", "ERP/CRM"],
    },
  ]);

  console.log("Seed data inserted successfully");
}
