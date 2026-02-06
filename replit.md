# E20 - Espacio en 20 Corporate Website

## Overview
Corporate website for Espacio en 20 (E20), a Mexican digital marketing agency specializing in ERP/CRM implementation for SMEs (PYMEs). Built with React + Vite + TypeScript + TailwindCSS.

## Architecture
- **Frontend**: React with wouter routing, TanStack Query, shadcn/ui components
- **Backend**: Express.js API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS with E20 brand colors (green #16a34a primary)

## Pages
1. **Home** (/) - Hero, value props, featured services, stats, testimonials carousel, CTA
2. **Servicios** (/servicios) - Detailed service cards with E20 focus
3. **Nosotros** (/nosotros) - History, mission, vision, values, team
4. **Portafolio** (/portafolio) - Filterable portfolio with project cards
5. **Blog** (/blog) - Blog posts with categories and search
6. **Testimoniales** (/testimoniales) - Client testimonial cards
7. **Contacto** (/contacto) - Contact form with validation, info, map

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

## User Preferences
- Language: Spanish (es)
- Tone: Corporate, serious, professional
- Font: Inter
- Primary color: Green (#16a34a)
