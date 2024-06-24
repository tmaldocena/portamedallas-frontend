import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Hero = () => {

    const backgrounds = ['bg-basketball', 'bg-bicycle', 'bg-tenis', 'bg-football', 'bg-running'];
    const [backgroundIndex, setBackgroundIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundIndex((prevIndex) => {
          const nextIndex = prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);


    return (
        <section className={"lg:h-[95vh] h-[50vh] w-full transition-all "  + backgrounds[backgroundIndex] + " bg-no-repeat bg-center bg-cover"}>
            <div className={"hero lg:min-h-screen h-full transition-all bg-black/60"} >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 lg:text-5xl text-3xl text-white font-bold font-open">Dale importancia a tus logros con portamedallas</h1>
                        <Link to='/tienda' className="btn btn-outline btn-accent">Comprar ahora</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero