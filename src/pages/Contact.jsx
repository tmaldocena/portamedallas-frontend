import { Toaster, toast } from "sonner";

const Contact = () => {

  const whatsapp = 'https://api.whatsapp.com/send?phone=573206348134&text=%C2%A1Hola!%20Estoy%20en%20la%20tienda%20Portamedallas%20y%20quiero%20pedir%20m%C3%A1s%20informaci%C3%B3n.';

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataEntries = event.target.elements;
    const form = new FormData();
    
      form.append('name', dataEntries.name.value);
      form.append('mail', dataEntries.mail.value);
      form.append('phone', dataEntries.phone.value);
      form.append('description', dataEntries.description.value);
    
    fetch('https://script.google.com/macros/s/AKfycbzsfWz_HLjyLtYpgVtn5hqXfCwfGKeQYIrFbAenNQRCYI37m3oVXFpp7bdgUYAd8W4/exec', {
      method: 'POST',
      body: form
    }).then( data => {

      setTimeout(() => {
        location.href = '/'
      }, 3000);

      toast.success('Enviamos tu consulta! Pronto tendrás una respuesta');
    }).catch( err => {

      setTimeout(() => {
        location.href = '/'
      }, 3000);

      toast.success('Enviamos tu consulta! Pronto tendrás una respuesta');

    } )
  };

  const copyMail = () => {
    const mail = 'samuelcastro@eltrolley.com';
    navigator.clipboard.writeText(mail);
    toast('Mail copiado al portapapeles')
  }

  return (
    <section className={"w-full lg:px-16 px-8 py-32 align-middle place-content-evenly text-primary font-open"} >
      <Toaster richColors/>
      <div className="flex lg:flex-row flex-col justify-evenly items-center">
        <div className="lg:w-2/5 w-full">
          <h1 className="text-3xl font-bold my-4 lg:text-left text-center">Contacto</h1>
          <p className="my-4 lg:text-left text-center">¿Tienes alguna propuesta institucional? ¿Algúna duda con respecto a compras? ¿Algún comentario o sugerencia? Estamos disponibles para escucharle atentamente.</p>
          <ul className="my-4 flex flex-col lg:items-start items-center">
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold tooltip tooltip-primary cursor-pointer" data-tip='Copiar correo' onClick={() => copyMail()}><box-icon name="envelope" color="#CE1126" />samuelcastro@eltrolley.com</li>
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold tooltip tooltip-primary" data-tip='Ir a whatsapp'><box-icon name="whatsapp" type="logo" color="#CE1126" /><a href={whatsapp} target="_blank">(+57) 320-6348134</a></li>
            <li className="flex flex-row align-middle gap-4 my-2 font-semibold"><box-icon name="world" color="#CE1126" />Bogotá, Colombia</li>
            <li className="flex flex-row align-middle gap-4"><box-icon name="" color="#CE1126" />Calle 20 #28-52 Centro Empresarial Hayuelos Oficina 3-36</li>
            <li className="btn btn-link btn-primary" onClick={() => document.getElementById('my_modal_2').showModal()}>Ver mapa</li>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box w-11/12 max-w-5xl flex flex-col items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.07671657152713!2d-74.13082183761553!3d4.6627630269748686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d2217a91a0f%3A0x641aca3ef0b1e738!2sCOMERCIALIZADORA%20EL%20TROLLEY%20SAS!5e0!3m2!1ses-419!2sar!4v1718913598957!5m2!1ses-419!2sar" className="lg:w-[800px] w-full lg:h-[300px] h-[600px]" allowfullscreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="modal-action">
                <form method="dialog" className="">
                  <button className="btn">Close</button>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </ul>
        </div>
        <form className="lg:w-auto w-full" onSubmit={handleSubmit}>
          {/* Nombre y Apellido */}
          <label className="form-control w-auto">
            <div className="label">
              <span className="label-text">Nombre y Apellido</span>
            </div>
            <input type="text" placeholder="Tu nombre y apellido" name="name" className="input input-bordered w-full" />
          </label>
          <div className="flex lg:flex-row flex-col">
            {/* Email */}
            <label className="form-control w-full lg:max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="mail" placeholder="tumail@mail.com" name="mail" className="input input-bordered w-full lg:max-w-xs max-w-full" />
            </label>
            {/* Telefono */}
            <label className="form-control w-full lg:max-w-xs">
              <div className="label">
                <span className="label-text">Teléfono</span>
              </div>
              <input type="tel" placeholder="(+11) 111-111-1111" name="phone" className="input input-bordered w-full lg:max-w-xs max-w-full" />
            </label>
          </div>
          {/* Especificaciones */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Especificaciones</span>
            </div>
            <textarea name="description" className="textarea textarea-bordered min-h-36 max-h-36" placeholder="Mi consulta es..."></textarea>
          </label>
          <input type="submit" value="Enviar" className="btn btn-primary w-full mt-4" />
        </form>
      </div>
    </section>
  )
}

export default Contact