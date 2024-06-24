import { Link } from "react-router-dom"

const Promo = () => {
    return (
        <section className="bg-no-repeat bg-center bg-cover bg-promo">
        <div className="hero min-h-[60vh] transition-all bg-black/30">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <box-icon name='medal' type='solid' color='#fce7f3' ></box-icon>
                    <h1 className="mb-5 text-3xl text-base-100 font-bold font-open">Tu único límite eres tu</h1>
                    <Link to='/tienda' className="btn btn-secondary">Compra ahora</Link>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Promo