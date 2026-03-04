import { useEffect } from "react";

export default function Privacidad() {
  useEffect(() => {
    document.title = "Aviso de Privacidad | Espacio en 20";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Aviso de Privacidad de Espacio en 20 (E20). Conoce como protegemos y tratamos tus datos personales conforme a la Ley Federal de Proteccion de Datos Personales.");
    }
  }, []);

  return (
    <div className="pt-28 pb-20" data-testid="page-privacidad">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8" data-testid="text-privacidad-title">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground" data-testid="text-privacidad-fecha">
            Ultima actualizacion: Marzo 2026
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">I. Identidad y Domicilio del Responsable</h2>
            <p>
              Espacio en 20 (en adelante "E20"), con domicilio en Ciudad de Puebla, Puebla, Mexico, es responsable del tratamiento de los datos personales que nos proporcione, los cuales seran protegidos conforme a lo dispuesto por la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares (la "Ley"), su Reglamento y los Lineamientos del Aviso de Privacidad.
            </p>
            <p>
              Para cualquier duda o solicitud relacionada con sus datos personales, puede contactarnos a traves de:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Correo electronico: contacto@e20.com.mx</li>
              <li>Telefono: 222 706 9668</li>
              <li>Direccion: Ciudad de Puebla, Puebla, Mexico</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">II. Datos Personales que Recabamos</h2>
            <p>
              Para las finalidades senaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente a traves de nuestro formulario de contacto, cuando visita nuestro sitio web, o cuando nos los proporciona por cualquier otro medio.
            </p>
            <p>Los datos personales que podemos recabar incluyen:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Correo electronico</li>
              <li>Numero telefonico</li>
              <li>Nombre de la empresa u organizacion</li>
              <li>Mensaje o consulta</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">III. Finalidades del Tratamiento</h2>
            <p>Los datos personales que recabamos seran utilizados para las siguientes finalidades:</p>
            <h3 className="text-lg font-medium text-foreground">Finalidades Primarias:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder a sus solicitudes de informacion, consultas y comentarios</li>
              <li>Proveer los servicios y productos contratados</li>
              <li>Dar seguimiento a proyectos y servicios en curso</li>
              <li>Emitir facturas y comprobantes fiscales</li>
              <li>Gestionar la relacion comercial con nuestros clientes</li>
            </ul>
            <h3 className="text-lg font-medium text-foreground">Finalidades Secundarias:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enviar informacion sobre nuevos servicios, productos y promociones</li>
              <li>Realizar encuestas de satisfaccion y mejora de servicios</li>
              <li>Elaborar estudios y estadisticas internas</li>
            </ul>
            <p>
              Si usted no desea que sus datos personales sean tratados para las finalidades secundarias, puede enviarnos su solicitud a contacto@e20.com.mx.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">IV. Transferencia de Datos</h2>
            <p>
              E20 no realizara transferencias de sus datos personales a terceros sin su consentimiento, salvo las excepciones previstas en el articulo 37 de la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">V. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer que datos personales tenemos de usted, para que los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la correccion de su informacion personal en caso de que este desactualizada, sea inexacta o incompleta (Rectificacion); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no esta siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelacion); asi como oponerse al uso de sus datos personales para fines especificos (Oposicion). Estos derechos se conocen como derechos ARCO.
            </p>
            <p>
              Para ejercer cualquiera de los derechos ARCO, usted debera presentar la solicitud respectiva enviando un correo electronico a: contacto@e20.com.mx
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">VI. Uso de Cookies y Tecnologias de Rastreo</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y otras tecnologias de rastreo para mejorar su experiencia de navegacion, analizar el trafico del sitio y personalizar el contenido. Usted puede deshabilitar el uso de cookies a traves de la configuracion de su navegador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">VII. Modificaciones al Aviso de Privacidad</h2>
            <p>
              E20 se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Estas modificaciones estaran disponibles a traves de nuestro sitio web en la seccion de Aviso de Privacidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">VIII. Consentimiento</h2>
            <p>
              Al proporcionar sus datos personales a traves de nuestro sitio web, formularios de contacto o cualquier otro medio, usted consiente que sus datos sean tratados conforme a los terminos y condiciones del presente aviso de privacidad.
            </p>
          </section>

          <div className="border-t border-border pt-6 mt-8">
            <p className="text-sm text-muted-foreground">
              Espacio en 20 (E20) - Ciudad de Puebla, Puebla, Mexico
            </p>
            <p className="text-sm text-muted-foreground">
              contacto@e20.com.mx | 222 706 9668
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
