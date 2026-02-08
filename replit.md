# E20 - Espacio en 20 Corporate Website

## Overview
Corporate website for Espacio en 20 (E20), a Mexican digital marketing agency specializing in ERP/CRM implementation for SMEs (PYMEs). E20 is the "Torre de Control" (Control Tower) for an ecosystem of companies. Built with React + Vite + TypeScript + TailwindCSS.

**Master Document:** See `PROMPT_E20.md` for the complete ecosystem vision, roadmap, and project specifications.

## Architecture
- **Frontend**: React with wouter routing, TanStack Query, shadcn/ui components
- **Backend**: Express.js API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS with E20 brand colors (green #16a34a primary)

## Pages
1. **Home** (/) - Hero, value props, featured services, stats (50 empresas, 170 campanas), testimonials carousel, CTA
2. **Servicios** (/servicios) - Detailed service cards with E20 focus
3. **Nosotros** (/nosotros) - History, mission, vision, values, team (6 members with Pixar avatars)
4. **Portafolio** (/portafolio) - Filterable portfolio with project cards (including CIE)
5. **Blog** (/blog) - Blog posts with categories and search
6. **Testimoniales** (/testimoniales) - Client testimonial cards
7. **Contacto** (/contacto) - Contact form with validation, info, map (Puebla)

## API Routes
- GET /api/testimonials
- GET /api/blog
- GET /api/portfolio
- POST /api/contact

## Database Tables
- contact_submissions, blog_posts, portfolio_items, testimonials

## Key Features
- Dark/light mode toggle
- Responsive design (mobile-first)
- Animated counters on home page
- SEO meta tags
- Contact form with Zod validation
- Seed data for all content types
- Pixar-style team avatars

## Contact Info
- Location: Ciudad de Puebla, Puebla
- Phone: 221 282 5339
- Email: info@e20.com.mx
- Social: Facebook, Instagram, LinkedIn (NO TikTok)

## Team
- Jose Angel Gutierrez - Director General
- Sigli Benoit - Directora de Marketing
- Edson Espinoza - Director de Tecnologia
- Maria Lopez - Disenadora Senior
- Jose Max - Disenador General
- Angel Eduardo - Programador General

## Current Version: v1.0
See PROMPT_E20.md for full roadmap (v1.1 through v5.0).

## User Preferences
- Language: Spanish (es)
- Tone: Corporate, serious, professional
- Font: Inter
- Primary color: Green (#16a34a)
- No TikTok
- No emojis
- Conservative numbers for credibility
