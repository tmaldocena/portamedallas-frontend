/* eslint-disable react/prop-types */
import Card from "../Card";


// eslint-disable-next-line react/prop-types
const Items = ({ products }) => {

    //console.log(products);


    return (
        <div className="lg:w-4/5 w-full justify-center lg:px-8 px-4 flex flex-wrap items-start lg:gap-4 gap-8">
                { products.map((prod,key) => {
                    return (
                        <Card item={prod} key={key} />

                    )
                })}
        </div>
    )
}

export default Items