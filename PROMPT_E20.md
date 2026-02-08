# PROMPT_E20.md - Documento Base del Ecosistema E20

**Fecha de creación:** 8 de febrero de 2026  
**Última actualización:** 8 de febrero de 2026  
**Dominio principal:** www.e20.com.mx  
**Hosting:** Replit

---

## 1. VISIÓN GENERAL

**Espacio en 20 (E20)** es la **"Torre de Control"** de un ecosistema de empresas y servicios digitales. Es una Agencia de Marketing Digital mexicana enfocada en MiPyMEs, que ofrece servicios de marketing digital integrados con soluciones empresariales (ERP/CRM/RRHH) bajo modelo SaaS (renta mensual).

### Filosofía
- Todo tiene que ver con el **SER** y con la **EMPRESA**
- Las MiPyMEs mexicanas merecen las mismas herramientas digitales que las grandes corporaciones
- El marketing digital efectivo empieza con una operación eficiente
- Automatización total: desde la captación del lead hasta el cierre de venta

### Modelo de Negocio
- Servicios SaaS con renta mensual (ERP/CRM/RRHH)
- Marketing digital como servicio
- Consultoría y capacitación
- Desarrollo de software a medida
- Ingresos recurrentes para sostener gasto y utilidad programada

---

## 2. ECOSISTEMA DE EMPRESAS

### 2.1 Torre de Control
| Empresa | Dominio | Descripción | Estado |
|---------|---------|-------------|--------|
| **Espacio en 20** | e20.com.mx | Agencia de Marketing Digital - Torre de Control | Publicada v1.0 |

### 2.2 Empresas de la Firma (Portafolio Propio)
| Empresa | Dominio | Descripción | Estado |
|---------|---------|-------------|--------|
| **Aptitus 360** | (por definir) | Centro Evaluador de Competencias Laborales del CONOCER.GOB - Área física con oficinas y servicios digitales, capacitaciones virtuales | Pendiente |
| **Aptitus 360 Consultores** | (por definir) .com | Consultoría Empresarial con formación profesional y Competencias del CONOCER.GOB - Área física con oficinas, servicios digitales, comunicación virtual y presencial in situ | Pendiente |
| **SEFINPAT** | sefinpat.com.mx | Consultoría Patrimonial - Oficina Virtual con Base de Conocimiento (documentos, imágenes, trípticos, videos) para consulta en tiempo real | En creación |

### 2.3 Clientes Externos (Portafolio de Trabajo)
| Empresa | Dominio | Descripción | Sucursales | Estado |
|---------|---------|-------------|------------|--------|
| **Ópticas Visual World** | visualworldopticas.com | Óptica | 3 sucursales | Existente (externo) |
| **HUACALES** | huacales.mx | Tienda de chiles secos, semillas, productos gourmet y regionales. Boutique para clase media/alta, amantes de la cocina. Productos no comerciales. | 3 sucursales | Pendiente |

### 2.4 Marcas Personales (Futuro)
| Persona | Rol | Estado |
|---------|-----|--------|
| **Sieglinde Benoit Vivas** | Consultor Senior | Pendiente |
| **José Ángel Gutiérrez González** | Consultor Profesional | Pendiente |

### 2.5 Interconexión del Ecosistema
- Todas las páginas web de las empresas deben enlazar a E20
- E20 muestra la lista de todas las empresas con enlaces a sus sitios
- Al pasar el mouse sobre una empresa en E20, se puede navegar a su sitio web
- Cada empresa sirve como publicidad para E20
- E20 genera tráfico hacia todas las empresas y viceversa

---

## 3. EQUIPO E20

| Nombre | Rol | Avatar |
|--------|-----|--------|
| José Ángel Gutiérrez | Director General | Pixar 3D |
| Sigli Benoit | Directora de Marketing | Pixar 3D |
| Edson Espinoza | Director de Tecnología | Pixar 3D |
| María López | Diseñadora Senior | Pixar 3D |
| José Max | Diseñador General | Pixar 3D |
| Angel Eduardo | Programador General | Pixar 3D |

---

## 4. SERVICIOS ACTUALES DE E20 (v1.0)

### Servicios ya implementados en la página:
1. Gestión de Redes Sociales (Facebook, Instagram, LinkedIn)
2. Campañas Publicitarias Digitales (Facebook Ads, Google Ads, Instagram Ads)
3. Diseño Gráfico y Branding
4. SEO (Optimización para Motores de Búsqueda)
5. Implementación ERP/CRM
6. Consultoría Digital
7. Desarrollo de Software (CIE como caso de éxito)

### Servicios por agregar (futuras versiones):
- SaaS: Renta mensual de ERP/CRM/RRHH
- Automatización de procesos empresariales
- E-commerce con facturación automática (CFDI)
- "Juanita.IA" - Call Center con IA 24/7
- Seguimiento automático de leads con IA integrada al CRM
- Correo corporativo personalizado (contacto@dominio.com.mx)
- Gestión de proyectos y tareas (integraciones con herramientas)
- Soporte al cliente automatizado (chatbots, tickets)
- Pasarelas de pago integradas
- Comunicación empresarial (mensajería, videollamadas)
- Base de Conocimiento digital (documentos, videos, trípticos)
- Capacitación virtual y presencial
- Gestión de RRHH

---

## 5. INFORMACIÓN DE CONTACTO

| Campo | Valor |
|-------|-------|
| **Dirección** | Ciudad de Puebla, Puebla |
| **Teléfono** | 221 282 5339 |
| **Email** | contacto@e20.com.mx |
| **Horario** | Lun - Vie: 9:00 - 18:00 |
| **Redes Sociales** | Facebook, Instagram, LinkedIn (NO TikTok) |
| **Correo corporativo** | contacto@e20.com.mx (pendiente configurar en Cloudflare) |

---

## 6. ESPECIFICACIONES TÉCNICAS

### Stack Tecnológico
- **Frontend:** React + TypeScript + Vite + TailwindCSS + shadcn/ui
- **Backend:** Express.js + Node.js
- **Base de Datos:** PostgreSQL con Drizzle ORM
- **Routing:** wouter
- **Estado:** TanStack Query
- **Hosting:** Replit
- **DNS:** Cloudflare (dominios e20.com.mx, sefinpat.com.mx)

### Estructura de la Base de Datos
- `contact_submissions` - Formulario de contacto
- `blog_posts` - Publicaciones del blog
- `portfolio_items` - Proyectos del portafolio
- `testimonials` - Testimonios de clientes

### Páginas Actuales (7)
1. **/** - Inicio (Hero, propuestas de valor, servicios destacados, estadísticas, testimonios, CTA)
2. **/servicios** - Servicios detallados
3. **/nosotros** - Historia, misión, visión, valores, equipo
4. **/portafolio** - Portafolio filtrable por categoría
5. **/blog** - Blog con categorías
6. **/testimoniales** - Testimonios de clientes
7. **/contacto** - Formulario de contacto, información, mapa de Puebla

### Diseño
- **Fuente:** Inter
- **Color primario:** Verde #16a34a
- **Idioma:** Español (es)
- **Tono:** Corporativo, serio, profesional
- **Modo oscuro/claro:** Toggle disponible
- **Diseño responsivo:** Mobile-first

---

## 7. PORTAFOLIO ACTUAL

| Proyecto | Cliente | Categoría | Resultado |
|----------|---------|-----------|-----------|
| Transformación Digital Completa | Comercializadora del Norte | ERP/CRM | +35% ventas en 6 meses |
| Estrategia de Redes Sociales | Restaurantes La Tradición | Redes Sociales | +400% seguidores, 3x reservaciones |
| Rebranding Corporativo | Consultores PM | Branding | Imagen profesional renovada |
| Campañas de Generación de Leads | Ferretería Industrial RJ | Campañas | 150+ leads calificados/mes |
| CIE - Comunicación Interna de la Empresa | Visual World Ópticas | Desarrollo de Software | Comunicación segura y capacitación continua |

### Estadísticas mostradas en la página:
- 50 Empresas transformadas
- 170 Campañas ejecutadas
- 8 Años de experiencia
- 40% Crecimiento promedio

---

## 8. ROADMAP DE VERSIONES

### v1.0 - Sitio Web Corporativo (COMPLETADA - Febrero 2026)
- [x] 7 páginas completas con contenido en español
- [x] Diseño responsivo con modo oscuro/claro
- [x] Formulario de contacto funcional con validación
- [x] Portafolio filtrable con 5 proyectos (incluyendo CIE)
- [x] Blog con 4 artículos semilla
- [x] Testimonios de 4 clientes
- [x] Avatares Pixar del equipo (6 miembros)
- [x] Mapa de ubicación (Puebla)
- [x] SEO básico
- [x] Publicación en e20.com.mx

### v1.1 - Ecosistema y Servicios Expandidos (Estimado: Febrero-Marzo 2026)
- [ ] Sección de empresas del ecosistema en E20 con enlaces interactivos
- [ ] Actualización de servicios: agregar SaaS, automatizaciones, IA
- [ ] Correo corporativo: contacto@e20.com.mx (configuración Cloudflare)
- [ ] Integración de enlaces cruzados entre sitios del ecosistema
- [ ] Creación del sitio SEFINPAT.COM.MX
- [ ] Portafolio expandido con Visual World y HUACALES

### v2.0 - Automatización e IA (Estimado: Marzo-Abril 2026)
- [ ] "Juanita.IA" - Chatbot inteligente integrado en todas las páginas
- [ ] CRM integrado con seguimiento automático de leads
- [ ] Sistema de agendamiento de citas automático
- [ ] Integración con call center IA (Twilio + IA)
- [ ] Panel de administración para gestión de contenido
- [ ] Base de Conocimiento digital

### v3.0 - E-Commerce y Facturación (Estimado: Abril-Mayo 2026)
- [ ] E-commerce integrado para clientes (Visual World, HUACALES)
- [ ] Facturación electrónica automática (CFDI 4.0) por usuario
- [ ] Pasarela de pagos (Stripe)
- [ ] Catálogo de productos con inventario
- [ ] Carrito de compras y checkout

### v4.0 - Plataformas de Clientes (Estimado: Mayo-Junio 2026)
- [ ] Sitio Aptitus 360 (Centro Evaluador)
- [ ] Sitio Aptitus 360 Consultores
- [ ] Sitio HUACALES.MX
- [ ] Marcas personales (Sieglinde Benoit, José Ángel Gutiérrez)
- [ ] Interconexión completa del ecosistema

### v5.0 - ERP/CRM SaaS Completo (Estimado: Junio-Julio 2026)
- [ ] Plataforma SaaS multi-tenant para clientes
- [ ] Módulo ERP completo
- [ ] Módulo CRM completo
- [ ] Módulo RRHH
- [ ] Dashboard de métricas y reportes
- [ ] "Juanita.IA" como call center 24/7 para todas las empresas

---

## 9. REGLAS DE PROGRAMACIÓN

1. **No suponer** - Siempre preguntar si hay confusión o duda
2. **Refutar la lógica** - Cuestionar ideas que no cumplan estándares
3. **Excelencia** - Ser excelentes en todo lo que se haga
4. **Mejora continua** - Mejorar todo el tiempo
5. **Revisión periódica** - Revisar todo lo creado cada 3-6 meses para actualizaciones
6. **Datos reales** - No usar datos ficticios ni placeholder en producción
7. **Seguridad** - Nunca exponer secretos o claves en el código

---

## 10. INTEGRACIONES DISPONIBLES PARA FUTURAS VERSIONES

Estas integraciones pueden ser utilizadas para expandir los servicios de E20:

| Integración | Uso potencial |
|-------------|---------------|
| **Stripe** | Pagos en línea, suscripciones SaaS, e-commerce |
| **Twilio** | Call center IA "Juanita.IA", SMS, WhatsApp |
| **AgentMail** | Correo automatizado, campañas de email |
| **Zendesk** | Soporte al cliente, tickets |
| **Asana/Todoist** | Gestión de proyectos internos |
| **OpenAI** | IA para chatbot, generación de contenido, análisis |

---

## 11. NOTAS IMPORTANTES

- **DNS:** Los dominios e20.com.mx y sefinpat.com.mx están en Cloudflare. El control del correo corporativo depende de la configuración DNS en Cloudflare.
- **Feedback widget y badge "Made with Replit":** Desactivados para apariencia profesional.
- **TikTok:** E20 NO tiene presencia en TikTok. Solo Facebook, Instagram, LinkedIn.
- **Números conservadores:** Las estadísticas de impacto son conservadoras para credibilidad (50 empresas, 170 campañas).
- **Idioma:** Todo el contenido del sitio debe estar en español.
- **Tono:** Corporativo, serio, profesional. Sin emojis.

---

*Este documento se actualiza conforme avanza el proyecto. Consultar siempre la versión más reciente.*
