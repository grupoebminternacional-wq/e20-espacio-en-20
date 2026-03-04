import { useState } from "react";
import { X, MessageCircle, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PHONE = "522227069668";
const EMAIL = "contacto@e20.com.mx";

export default function FloatingHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" data-testid="widget-floating-help">
      {open && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-64 p-4 animate-in fade-in slide-in-from-bottom-2 duration-200" data-testid="panel-floating-help">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-foreground text-sm" data-testid="text-help-title">Necesitas ayuda?</span>
            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 flex items-center justify-center rounded-full text-muted-foreground"
              data-testid="button-close-help"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            <a
              href={`https://wa.me/${PHONE}?text=Hola%2C%20me%20interesa%20conocer%20mas%20sobre%20sus%20servicios.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              data-testid="link-whatsapp"
            >
              <SiWhatsapp className="w-5 h-5 text-green-500" />
              <span className="text-sm text-foreground">WhatsApp</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              data-testid="link-email-help"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">{EMAIL}</span>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center"
        data-testid="button-floating-help"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
