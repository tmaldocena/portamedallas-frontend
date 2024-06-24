import Carousel from "./Carousel"
import InfoCards from "./InfoCards"

const About = () => {
    return (
        <section className="bg-base-100 font-open">
            <div className="lg:p-16 p-8">
            <h2 className="text-2xl text-center text-primary font-bold font-open">Sobre Nosotros</h2>
            <p className="mt-3 font-open text-center lg:text-base text-sm">En Portamedallas, entendemos que cada medalla cuenta una historia de esfuerzo, dedicación y logros en el mundo del deporte. Es por eso que ofrecemos una amplia variedad de portamedallas diseñados para satisfacer  las necesidades de los atletas de todas las disciplinas.</p>
            <p className="lg:mt-2 mt-8 text-center lg:text-base text-sm">Con <strong className="lg:text-lg text-base">más de 30 deportes</strong> representados en nuestra colección, estamos  comprometidos a ayudarte a exhibir con orgullo tus logros deportivos.</p>
            <div className="my-6 font-bold font-open text-center  text-2xl md:text-xl [text-wrap:balance] bg-clip-text text-transparent bg-primary">Tenemos los mejores portamedallas para <span className="text-secondary inline-flex flex-col h-[32px] md:h-[28px] overflow-hidden">
                <ul className="block font-extrabold animate-text-slide text-left leading-tight [&_li]:block">
                    <li>Running</li>
                    <li>Fútbol</li>
                    <li>Baloncesto</li>
                    <li>Baseball</li>
                    <li>Natación</li>
                    <li>Bike</li>
                    <li aria-hidden="true">Running</li>
                </ul>
            </span></div>
            </div>
            <Carousel />
            <InfoCards />
            <h2 className="pt-16 font-open font-bold text-center text-2xl text-primary">Nuestro empaque</h2>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-12 mt-8">
                <img src="./assets/empaque.png" alt="empaque del portamedallas" className="rounded-xl shadow-2xl transition-all hover:scale-105 lg:w-[512px] w-64"/>
                <img src="./assets/impreso.jpg" alt="impreso del portamedallas" className="rounded-xl shadow-2xl transition-all hover:scale-105 lg:w-[512px] w-64"/>
            </div>
        </section>
    )
}

export default About