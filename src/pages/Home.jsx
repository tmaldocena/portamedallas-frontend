import { useEffect } from "react"
import { InstagramEmbed } from "react-social-media-embed"
import About from "../components/home/About"
import Affiliate from "../components/home/Affiliate"
import Contact from "../components/home/Contact"
import Hero from "../components/home/Hero"
import Populars from "../components/home/Populars"
import Promo from "../components/home/Promo"

const Home = () => {

  useEffect(() => {

    const first = localStorage.getItem('firstTime');
    
    if(!first){
      document.getElementById('promo_modal').showModal()
      localStorage.setItem('firstTime', true);
    }

  }, []);


  return (
    <div>
      <dialog id="promo_modal" className="modal">
        <div className="modal-box flex flex-col justify-center">

          <InstagramEmbed url="https://www.instagram.com/reel/C2H71rqO_vt/" width={328} />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <Hero />
      <About />
      <Populars />
      <Affiliate />
      <Promo />
      <Contact />
    </div>
  )
}

export default Home