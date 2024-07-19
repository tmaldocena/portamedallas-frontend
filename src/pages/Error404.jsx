import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <box-icon name='medal' type='solid' color='#0D0E26' ></box-icon>
          <h2 className="text-5xl font-bold">
            404
          </h2>
          <p className="py-6">
            Página no encontrada o no disponible
          </p>
          <Link to="/" className="btn btn-ghost">Volver al Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Error404