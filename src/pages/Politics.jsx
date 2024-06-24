import { Toaster, toast } from 'sonner';

const copyNumber = () => {
    const number = '601 3207876';
    navigator.clipboard.writeText(number);
    toast('Número copiado al portapapeles')
}

const copyMail = () => {
    const mail = 'alejandrarodriguez@eltrolley.com';
    navigator.clipboard.writeText(mail);
    toast('Mail copiado al portapapeles')
}


const Politics = () => {
    return (
        <section className="w-full font-open px-16 my-8">
            <Toaster richColors closeButton />
            <h1 className="font-bold text-2xl">Política de Privacidad y Tratamiento de Datos Personales</h1>
            <h5 className="my-2 font-light text-base">Comercializadora El Trolley SAS - Ecoideass - Portamedallas</h5>

            <div className="divider"></div>

            <p className='mt-2'>
                La privacidad de datos personales es importante para <span className='font-bold'>COMERCIALIZADORA EL TROLLEY SAS</span> y sus marcas <span className='font-bold'>ECOIDEASS</span> y <span className='font-bold'>PORTAMEDALLAS</span>, por ello,
                <span className='font-bold'>COMERCIALIZADORA EL TROLLEY SAS</span> (en adelante <span className='font-bold'>EL TROLLEY SAS</span>) con NIT No.
                900674829-5, ubicada en la calle 20 No 82-52 of 336 de Bogotá, D.C., teléfono (601)
                7514339, en cumplimiento del Decreto Reglamentario 1377 DE 2013 y la Ley 1581 de
                2012 “Por la cual se dictan disposiciones generales para la protección de datos
                personales” y demás normas aplicables, se compromete a actuar con
                responsabilidad al momento de recopilar su información personal y a proteger su
                privacidad como proveedor, cliente, empleado y contratista, y a garantizar la
                confidencialidad de sus datos personales.
            </p>
            <p className='mt-2'>
                <span className='font-bold'>EL TROLLEY</span> garantiza la confidencialidad y seguridad de cada uno de los datos
                recibidos por terceros, almacenándolos y usándolos de forma adecuada y segura,
                lo que no impide que éstos puedan verificar la exactitud de esta y ejercer sus
                derechos relativos a conocer, actualizar, rectificar y suprimir la información
                suministrada, así como su derecho a revocar la autorización suministrada a <span className='font-bold'>EL TROLLEY</span>, para el tratamiento de sus datos.
            </p>

            <h5 className="font-bold text-lg my-2">Alcance</h5>

            <p className='mt-2'>
                Esta Política de Protección y Privacidad de Datos personales se aplicará a todas las
                Bases de Datos y/o Archivos que contengan datos personales que sean objeto de
                Tratamiento por parte del <span className='font-bold'>TROLLEY</span>, considerada como responsable y/o encargada
                del tratamiento de datos personales.
            </p>

            <h5 className="font-bold text-lg my-2">Términos</h5>

            <ul className="list-disc ml-8">
                <li>Autorización: Consentimiento previo, expreso e informado del titular para llevar a cabo el Tratamiento de datos personales.</li>
                <li>Base de datos: Conjunto organizado de datos personales que sea objeto de Tratamiento.</li>
                <li>Dato Personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
                <li>Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento.</li>
                <li>Responsable del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos.</li>
                <li>Titular: Persona natural cuyos datos personales sean objeto de tratamiento.</li>
                <li>Tratamiento: Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</li>
            </ul>

            <p className='mt-2'>
                Los datos que <span className='font-bold'>EL TROLLEY</span> recolecta de terceros, se procesa y usa de conformidad
                con las regulaciones actuales de protección de información y privacidad, que se
                regirá por las siguientes condiciones:
            </p>
            <p className='mt-2'>
                Principios generales que se acogen para garantizar la protección de los datos
                personales:
            </p>
            <p className='mt-2'>
                Dentro del compromiso legal y corporativo de <span className='font-bold'>EL TROLLEY</span> para garantizar la
                confidencialidad de la información personal de sus proveedores, clientes,
                empleados, y contratistas, se establecen como principios generales para el
                tratamiento de la información, en desarrollo de los ya presentes en la Ley 1581 del
                2012 y el Decreto 1377 del 2013, los siguientes:
            </p>

            <ul className="list-disc ml-8">
                <li>Principio de legalidad: no habrá tratamiento de información personal sin
                    observar las reglas establecidas en la normatividad vigente.</li>
                <li>Principio de finalidad.</li>
                <li>Proveer e informar nuestros productos y/o servicios.</li>
                <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes, proveedores, y empleados.</li>
                <li>Informar sobre cambios de nuestros productos y/o servicios.</li>
                <li>Evaluar la calidad de nuestros productos y/o servicios.</li>
                <li>Enviar información de alto interés sobre salud ocupacional y seguridad industrial.</li>
                <li>Enviar información a sus trabajadores y clientes.</li>
                <li>Verificación saldos de sus acreedores.</li>
                <li>Para actividades de mercadeo, estadísticas, de investigación y demás
                    propósitos comerciales que no contravengan la legislación vigente en
                    Colombia.</li>
                <li>Para la atención de requerimientos judiciales o administrativos y el
                    cumplimiento de mandatos judiciales o legales.</li>
                <li>Principio de libertad: <span className='font-bold'>EL TROLLEY</span> realizará tratamiento de datos personales
                    únicamente cuando cuenten con la autorización de las personas en los
                    términos del art. 3 literal a de la Ley 1581 del 2012 y el capítulo II del Decreto
                    1377 del 2013.</li>
                <li>Principio de veracidad y calidad: <span className='font-bold'>EL TROLLEY</span> propenderá porque la
                    información de sus proveedores, clientes, empleados y contratistas sea veraz
                    y se encuentre actualizada, para lo cual dispondrá de medios eficientes
                    para la actualización y rectificación de los datos personales. Igualmente, EL
                    TROLLEY se abstendrá de llevar a cabo el tratamiento de la información
                    cuando existan dudas sobre la calidad o veracidad de esta.</li>
                <li>Principio de transparencia: dentro de los mecanismos que se establezcan
                    para el ejercicio de los derechos de los titulares de la información personal,
                    se garantizará a proveedores, clientes, empleados y contratistas, así como
                    a los terceros autorizados por este, el acceso a la información sobre datos
                    personales que le conciernan.</li>
                <li>Principio de acceso y circulación restringida, EL TROLLEY se compromete a
                    garantizar que únicamente personas autorizadas podrán acceder a la
                    información personal. Asimismo, su circulación se limitará al ejercicio de las
                    finalidades autorizadas por el usuario.</li>
                <li>Principio de seguridad: <span className='font-bold'>EL TROLLEY</span> adelantará todas las medidas técnicas,
                    administrativas y humanas para garantizar que la información personal de
                    los proveedores, clientes, empleados y contratistas almacenada en bases
                    de datos físicas o digitales no circule o personas no autorizadas accedan a
                    ella.</li>
            </ul>

            <h5 className="font-bold text-lg my-2">Derechos Sobre Datos Personales</h5>

            <p className='mt-2'>
                Los titulares de la información podrán, en cualquier tiempo, ejercer los derechos
                consagrados en la Ley 1581 del 2012 de conocer, actualizar y rectificar sus datos
                personales, solicitar prueba de la autorización otorgada para el tratamiento,
                informarse sobre el uso que se ha dado a los datos, revocar la autorización, solicitar
                la supresión de sus datos cuando sea procedente y acceder en forma gratuita a
                los mismos.
            </p>
            <p className='mt-2'>
                Para el ejercicio de los derechos el titular de la información podrá comunicarse con
                la línea telefónica <span className='hover:font-bold' onClick={() => copyNumber()}>(601)3207876</span>, o enviar un correo electrónico a
                <span className='hover:font-bold' onClick={() => copyMail()}>alejandrarodriguez@eltrolley.com</span>.
            </p>

            <h5 className="font-bold text-lg my-2">Información que Recoletamos y Almacenamos:</h5>

            <p className='mt-2'>
                Dependiendo de la relación que el titular tenga con <span className='font-bold'>EL TROLLEY</span>, la información que
                se recopila o almacena puede incluir lo siguiente:
            </p>

            <ul className='list-disc ml-8'>
                <li>Datos generales de contacto, tales como: dirección, teléfono fijo, teléfono
                    móvil, correo electrónico.</li>
                <li>Datos particulares según el tipo de vinculación: clientes, empleados y
                    contratistas; nivel de ingresos, datos financieros, capacidad de
                    endeudamiento, patrimonio bruto, personas a cargo, composición del
                    grupo familiar, hobbies o aficiones, bienes que posee, información laboral.</li>
                <li>Datos sensibles: Proveedores datos biométricos.</li>
                <li>La información personal que se recoge de los proveedores, por conducto
                    de las diversas fuentes puede incluir, pero no limitarse a:
                    <ul className='list-disc ml-4'>
                        <li> Nombre, sexo y culto religioso.</li>
                        <li> Lugar, fecha de nacimiento y género.</li>
                        <li> Dirección física, de correo electrónico, números de teléfonos, celular, fax y
                            de localizadores personales.</li>
                        <li> Empleador, su ubicación y datos de contacto.</li>
                        <li> Contactos familiares o de responsables legales.</li>
                        <li> Grado de educación básica, secundaria o universitaria. Profesión.</li>
                        <li> Información necesaria para facilitar la prestación de servicios, incluyendo
                            información familiar o laboral.</li>
                        <li> Número de cédula, pasaporte o NIT, nacionalidad y país de residencia.</li>
                        <li> Aseguradora o prestadora de servicios de salud.</li>
                        <li> Uso de productos y servicios.</li>
                    </ul>
                </li>
            </ul>

            <h5 className='font-bold text-lg my-2'>Política para el tratamiento de datos sensibles:</h5>
            <p className='mt-2'>
                EL TROLLEY, no recolectará, incorporará ni almacenará datos sensibles de sus
                proveedores, clientes, empleados o terceros a menos que exista una autorización
                previa del titular de la información. Solo se solicitará la autorización mencionada
                cuando sea necesaria y proporcional para la ejecución de la relación contractual
                con el titular, siempre y cuando la ley exija o permita acceder a información
                sensible de este.
            </p>
            <p className='mt-2'>
                La autorización para el tratamiento de los datos sensibles se solicitará previa la
                incorporación de estos, y en esta se señalará la finalidad para la cual se incorporan,
                se indicará que la respuesta a las preguntas sobre datos sensibles es facultativa, y
                los demás elementos descritos en la presente política para la obtención de la
                autorización para el tratamiento de la información. No podrá realizarse tratamiento
                de datos sensibles para fines distintos de los autorizados por el titular. El acceso,
                circulación y tratamiento de los datos sensibles será restringido y se limitará a lo
                expresamente autorizado por el titular y a lo estipulado en la ley.
            </p>
            <p className='mt-2'>
                Política para el tratamiento de datos de niños y adolescentes: Según lo dispuesto
                por el Artículo 7º de la Ley 1581 de 2012 y el artículo 12 del Decreto 1377 de 2013,
                EL TROLLEY sólo realizará el Tratamiento, esto es, la recolección, almacenamiento,
                uso, circulación y/o supresión de datos personales correspondientes a niños, niñas
                y adolescentes, siempre y cuando este Tratamiento responda y respete el interés
                superior de los niños, niñas y adolescentes y asegure el respeto de sus derechos
                fundamentales.
            </p>
            <p className='mt-2'>
                Cumplidos los anteriores requisitos, <span className='font-bold'>EL TROLLEY</span> deberá obtener la autorización del
                representante legal del niño, niña o adolescente, previo ejercicio del menor de su
                derecho a ser escuchado, opinión que será valorada teniendo en cuenta la
                madurez, autonomía y capacidad para entender el asunto.
            </p>

            <h5 className='font-bold text-lg my-2'>Finalidad</h5>

            <p className='mt-2'>
                Los datos personales son objeto de tratamiento por parte de EL TROLLEY con las
                siguientes finalidades:
            </p>

            <ul className='list-disc ml-8'>
                <li>Proveer e informar nuestros productos y/o servicios.</li>
                <li>Dar cumplimiento a obligaciones contraídas con nuestros proveedores, clientes, proveedores, y empleados.</li>
                <li>Informar sobre cambios de nuestros productos y/o servicios.</li>
                <li>Evaluar la calidad de nuestros productos y/o servicios.</li>
                <li>Enviar información de alto interés sobre salud ocupacional.</li>
                <li>Enviar información a sus proveedores, trabajadores y clientes.</li>
                <li>Verificación saldos de sus acreedores.</li>
                <li>Para la atención de requerimientos judiciales o administrativos y el cumplimiento de mandatos judiciales o legales.</li>
            </ul>

            <h5 className='font-bold text-lg my-2'>Autorización</h5>

            <p className='mt-2'>
                EL TROLLEY debe solicitar autorización previa, expresa e informada a los titulares de
                los datos personales sobre los que requiera realizar el tratamiento.
            </p>

            <ul className='list-disc ml-8'>
                <li>Autorización previa significa, que el consentimiento debe ser otorgado por el Titular, a más tardar en el momento de la recolección de los Datos personales.</li>
                <li>Autorización expresa quiere decir que el consentimiento del titular debe ser explícito y concreto, no son válidas las autorizaciones abiertas y no específicas.</li>
            </ul>

            <p className='mt-2'>
                Se requiere que el titular manifieste su voluntad de autorizar que EL TROLLEY realice el tratamiento de sus datos personales.
            </p>
            <p className='mt-2'>
                Esta manifestación de voluntad del titular puede darse a través de diferentes mecanismos puestos a disposición por EL TROLLEY tales como:
            </p>

            <ul className='list-disc ml-8'>
                <li>Por escrito, por ejemplo, diligenciando un formato de autorización.</li>
                <li>De forma oral, por ejemplo, en una conversación telefónica o en videoconferencia.</li>
                <li>Mediante conductas inequívocas que permitan concluir que otorgó su autorización, por ejemplo, a través de su aceptación expresa a los términos y condiciones de una actividad dentro de los cuales se requiera la autorización de los participantes para el tratamiento de sus datos personales.</li>
            </ul>

            <p className='mt-2'>
                Cualquiera que sea el mecanismo utilizado por EL TROLLEY, es necesario que la
                autorización se conserve para poder ser consultada con posterioridad.
            </p>

            <p className='mt-2'>
                Autorización Informada significa que, al momento de solicitar el consentimiento al titular, debe informársele claramente:
            </p>
            <ul className='list-disc ml-8'>
                <li>Los datos personales que serán recolectados.</li>
                <li>La identificación y datos de contacto del responsable y del encargado del
                    tratamiento.</li>
                <li>Las finalidades específicas del tratamiento que se pretende realizar, es decir:
                    cómo y para qué se va a hacer la recolección, el uso, la circulación de los
                    datos personales.</li>
                <li>Cuáles son los derechos que tiene como titular de los datos personales.</li>
                <li>El carácter facultativo de la respuesta a las preguntas que le sean hechas, cuando éstas versen sobre datos sensibles o sobre los datos de niñas, niños y adolescentes.</li>
            </ul>

            <h5 className='font-bold text-xl my-2'>Vigencia</h5>

            <p className='mt-2'>
                La información suministrada por los titulares permanecerá almacenada por el
                término necesario para el cumplimiento de los fines para los cuales fue
                incorporada.
            </p>

            <div className='divider'></div>

            <h3 className='font-bold text-2xl my-2'>Modificaciones a la Política de Privacidad y Tratamiento de Datos Personales</h3>

            <p className='mt-2'>
                <span className='font-bold'>EL TROLLEY</span> se reserva el derecho de modificar las normas de confidencialidad y
                protección de datos con el fin de adaptarlas a nuevos requerimientos de tipo legal,
                jurisprudencial, técnico y, en general, cuando sea necesario para prestar un mejor
                servicio.
            </p>

            <span className='text-xs text-end'>Última revisión: 10/06/2024</span>
        </section>
    )
}

export default Politics