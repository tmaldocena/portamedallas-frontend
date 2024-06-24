
const InfoCards = () => {
    return (
        <section className="py-8 font-open px-16">
            <h2 className="text-center text-2xl font-bold">¿Cómo los hacemos?</h2>
            <div className="grid lg:grid-rows-1 justify-center items-center gap-4">
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all ease-in">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Material de calidad</h2>
                        <p>Nuestros portamedallas están hechos con metal <strong>CR-TEC</strong>, garantizando durabilidad y resistencia para tus logros deportivos.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all ease-in">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Diseño Preciso</h2>
                        <p>Utilizamos tecnología de corte láser para un acabado impecable en cada pieza, asegurando la perfecta exhibición de tus medallas.</p>
                    </div>
                </div>
                <div className="lg:row-start-2 row-start-3 card bg-base-100 shadow-xl hover:shadow-2xl transition-all ease-in">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Estilo duradero</h2>
                        <p>Con recubrimiento de pintura electrostática, nuestros portamedallas no solo lucen elegantes, sino que también resisten el paso del tiempo con estilo.</p>
                    </div>
                </div>
                <div className="lg:row-start-2 row-start-4 card bg-base-100 shadow-xl hover:shadow-2xl transition-all ease-in">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Comodidad y facilidad</h2>
                        <p>Con 15 ganchos para soportar 30 medallas. De fácil instalación, gracais a su cinta de doble faz en la parte trasera, capaz de soportar el peso de tus logros.</p>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default InfoCards