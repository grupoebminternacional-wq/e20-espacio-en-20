import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
  { href: "/testimoniales", label: "Testimoniales" },
  { href: "/contacto", label: "Contacto" },
];

const services = [
  "Redes Sociales",
  "Campañas Publicitarias",
  "Diseño y Branding",
  "SEO",
  "ERP/CRM",
  "Consultoría Digital",
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E20</span>
              </div>
              <span className="font-bold text-lg">Espacio en 20</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Agencia de marketing digital especializada en transformación digital e implementación de ERP/CRM para PYMEs mexicanas.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-facebook">
                <SiFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-linkedin">
                <SiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">contacto@e20.com.mx</li>
              <li className="text-sm text-gray-400">221 282 5339</li>
              <li className="text-sm text-gray-400">Ciudad de Puebla, Puebla</li>
              <li className="text-sm text-gray-400">Lun - Vie: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Espacio en 20. Todos los derechos reservados.
          </p>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" data-testid="link-privacy">
            Aviso de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
