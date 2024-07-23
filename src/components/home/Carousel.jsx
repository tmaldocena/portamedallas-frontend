import { useRef } from "react"
import { Link } from "react-router-dom";


const categories = [
    {
        id: 'slide2',
        name: 'Baloncesto',
        icon: 'basketball'
    },
    {
        id: 'slide2',
        name: 'Futbol',
        icon: 'football'
    },
    {
        id: 'slide4',
        name: 'Mountain Bike',
        icon: 'cycling'
    },
    {
        id: 'slide5',
        name: 'Gimnast',
        icon: 'dumbbell'
    },
    {
        id: 'slide6',
        name: 'Triatlon',
        icon: 'run'
    },
    {
        id: 'slide7',
        name: 'Natación',
        icon: 'swim'
    },
    {
        id: 'slide8',
        name: 'Tenis',
        icon: 'tennis-ball'
    },
]

const Carousel = () => {
    
    let x = 0
    const lastSlide = useRef(null);
    const firstSlide = useRef(null);

    const focusLast = () => {
        document.getElementById('carousel').scrollBy(x, 0);
      };

    const focusFirst = () => {
        document.getElementById('carousel').scrollBy(x, 0);
      };
    

    return (
        <div className="font-open">
            <div className="flex flex-row gap-2 lg:px-16 px-4 items-baseline my-4">
                <h3 className="flex-none text-2xl font-bold text-primary">Filtrar por categoría</h3>
                <Link to='/tienda' className="flex-none text-gray-500 hover:text-primary">ver todo</Link>
                <div className="ml-auto flex gap-2 justify-between">
                    <button onClick={ focusFirst } className="btn lg:btn-sm btn-xs btn-circle">❮</button>
                    <button onClick={ focusLast } className="btn lg:btn-sm btn-xs btn-circle">❯</button>
                </div>

            </div>
            <div id="carousel" className="carousel carousel-end gap-4 py-12 w-full">
                <div className="lg:ml-16 ml-4 carousel-item relative lg:w-1/5 w-1/3 min-h-40">
                    <Link to='/tienda?cat=Running' ref={ firstSlide } className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-base-200 transition-all bg-secondary hover:bg-secondary/95 hover:shadow-2xl border border-accent">
                        <box-icon name='run' color="#ffe4e6" size="lg"></box-icon>
                        <h4 className="font-bold text-center text-base-100 mx-2">Running</h4>
                    </Link>
                </div>

                { categories.map(function(cat, key){
                    return(
                    <div key={key} id={cat.id} className="carousel-item relative lg:w-1/5 w-1/3">
                    <Link to={`/tienda?cat=${cat.name}`} className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-secondary hover:bg-secondary/95 hover:shadow-2xl border border-accent">
                        <box-icon name={ cat.icon } color="#ffe4e6" size="lg"></box-icon>
                        <h4 className="font-bold text-center text-base-100 mx-2">{ cat.name }</h4>
                    </Link>
                </div>
                    )
                })}

                <div className="lg:pr-16 pr-4 carousel-item relative lg:w-1/5 w-1/3">
                    <Link to='/tienda?cat=Mascotas' ref={lastSlide} className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-secondary hover:bg-secondary/95 hover:shadow-2xl border border-accent">
                    <box-icon name='cat' type="solid" color='#ffe4e6' size="lg"></box-icon>
                        <h4 className="font-bold text-center text-base-100 mx-2">Mascotas</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Carousel