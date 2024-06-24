import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <section className="hero py-24 transition-all ">
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <box-icon name='medal' type='solid' color='#fce7f3' ></box-icon>
                <h2 className="mb-2 text-3xl text-primary font-bold font-open">¿Dudas o consultas?</h2>
                <p>Estamos atentos a ayudarte con tu compra o propuesta institucional</p>
                <Link to='/contact' className="mt-5 btn btn-secondary">Contacto</Link>
            </div>
        </div>
    </section>
  )
}

export default Contact

