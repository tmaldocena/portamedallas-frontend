import { useEffect } from "react"
import About from "../components/home/About"
import Affiliate from "../components/home/Affiliate"
import Contact from "../components/home/Contact"
import Hero from "../components/home/Hero"
import Populars from "../components/home/Populars"
import Promo from "../components/home/Promo"
import { Toaster } from "sonner"
import { toast } from "sonner"

const Home = () => {

  useEffect(() => {

    let first = localStorage.getItem('firstTime') || 0;

    if (first === true) { localStorage.setItem('firstTime', 0) }

    if (first <= 5) {
      document.getElementById('promo_modal').showModal()
      localStorage.setItem('firstTime', ++first);
    }

    toast.custom((t) => (
      <div className="bg-base-200 lg:p-4 p-2 rounded-lg">
        <h1 className="lg:text-lg text-base font-bold">Política de cookies</h1>
        <p className="py-2 lg:text-base text-sm">Utilizamos cookies y tecnologías similares para habilitar los servicios y la funcionalidad de nuestro sitio y para comprender tu interacción con nuestro servicio.</p>
        <div className="flex flex-row gap-2">
          <button className="btn btn-sm btn-primary" onClick={() => toast.dismiss(t)}>Estoy de acuerdo</button>
          <button className="btn btn-sm btn-outline btn-primary" onClick={() => toast.dismiss(t)}>Cerrar</button>
        </div>
      </div>
    ),{ duration: Infinity });


  }, []);


  return (
    <div className="animate animate-fade-in">
      <Toaster position="bottom-left" richColors closeButton />
      <dialog id="promo_modal" className="modal">
        <div className="modal-box flex flex-col justify-center items-center ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <video className="w-3/5 rounded-lg" controls controlsList="nodownload nofullscreen noremoteplayback">
            <source src="/assets/portamedallas-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href="https://www.instagram.com/portamedallas/" target="_blank" rel="noreferrer" className="btn btn-link btn-primary">Ver más contenido en nuestro Instagram</a>
        </div>
      </dialog>
      <Hero />
      <About />
      <Populars />
      <Affiliate />
      <Promo />
      <Contact />
    </div >
  )
}

export default Home