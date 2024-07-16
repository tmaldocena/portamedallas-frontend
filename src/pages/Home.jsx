import { useEffect } from "react"
import About from "../components/home/About"
import Affiliate from "../components/home/Affiliate"
import Contact from "../components/home/Contact"
import Hero from "../components/home/Hero"
import Populars from "../components/home/Populars"
import Promo from "../components/home/Promo"

const Home = () => {

  useEffect(() => {

    const first = localStorage.getItem('firstTime');

    if (!first) {
      document.getElementById('promo_modal').showModal()
      localStorage.setItem('firstTime', true);
    }

  }, []);


  return (
    <div>
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