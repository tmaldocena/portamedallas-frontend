import Card from "../Card"
import products from '../../utils/products.json'

const Populars = () => {
  return (
    <section className="py-12 font-open">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-primary">Los más populares</h2>
        <p className="text-center">Conoce nuestros productos más vendidos</p>
      </div>
      <div className="flex xl:flex-row flex-col items-center lg:gap-4 gap-8 lg:px-16 px-6">
          {
            products.filter((prod, index) => index < 4).map((product, index) => {
              return (
                <Card item={product} key={index} />
              )
            })
          }
      </div>
    </section>
  )
}

export default Populars