import { useEffect, useState } from "react";
import Filters from "../components/shop/Filters"
import Items from "../components/shop/Items"
import UseLogin from "../hooks/useLogin";


const Shop = () => {

    const url = new URLSearchParams(window.location.search)
    console.log(url.get('cat'));
    const { user } = UseLogin()
    const [searchItem, setSearchItem] = useState('')
    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])

    const [filters, setFilters] = useState({
        category: url.get('cat') || 'all',
        maxPrice: 150001,
        orderBy: 'asc'
    });

    const fetchingData = async () => {
        try {
            const res = fetch('https://portamedallas-backend.vercel.app/api/products')

            if (!res.ok) {
                console.log('There was an error!');
            }

            const json = await (await res).json()

            console.log(json)
            setProducts(json);
            setFilteredItems(json)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchingData()
        //setFilteredItems(products)
        if(user){
            document.getElementById('store_modal').showModal()
        }

    }, []);

    useEffect(() => {
      console.log(filters)
    }, [filters])
    

    const handleInputChange = (e) => {
        setFilteredItems(products);
        setSearchItem(e.target.value)
        //console.log(searchItem);
        const filtered = products.filter((item) =>
            item.product_name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        console.log(filtered);
        setFilteredItems(filtered);
    }

    const filterProducts = () => {
        return filteredItems.filter((prod) => Number(prod.product_price) < Number(filters.maxPrice) )
    }

    const sortBy = () => {
        if( filters.orderBy === 'asc' ) return filteredItems.sort((a,b) => (a.product_name > b.product_name) ? 1 : ((b.product_name > a.product_name) ? -1 : 0))
        if( filters.orderBy === 'desc' ) return filteredItems.sort((a,b) => (a.product_name < b.product_name) ? 1 : ((b.product_name < a.product_name) ? -1 : 0))
        if( filters.orderBy === 'higher' ) return filteredItems.sort((a,b) => (Number(a.product_price) < Number(b.product_price)) ? 1 : ((Number(b.product_price) < Number(a.product_price)) ? -1 : 0))
        if( filters.orderBy === 'lower' ) return filteredItems.sort((a,b) => (Number(a.product_price) > Number(b.product_price)) ? 1 : ((Number(b.product_price) > Number(a.product_price)) ? -1 : 0))
        //setFilteredItems(ordered);
    }

    const categoryFilter = () =>{
        return filteredItems.filter((prod) => prod.product_category === filters.category || filters.category === 'all')
    }

    let fiProd = [];
    
    //fiProd = filteredItems.filter((prod) => prod.product_category === filters.category || filters.category === 'all')

    fiProd = filterProducts()
    fiProd = sortBy()
    fiProd = categoryFilter()
    //console.log(fiProd);

    return (
        <section className={"w-full text-primary font-open animate animate-fade-in"} >
            <dialog id="store_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <box-icon name='medal' color="#0D0E26"></box-icon>
                    <h3 className="font-bold text-xl">Bienvenido a la tienda de Portamedallas</h3>
                    <p className="py-4">Para realizar las compras, no olvides <a href="/register" className="font-bold text-primary">crear una cuenta</a> o <a href="/login" className="font-bold text-primary">iniciar sesión</a>  con tu usuario.</p>
                    <p className="pt-4">Estamos atentos por si tienes alguna consulta, no olvides de contactarnos por nuestras redes sociales!</p>
                </div>
            </dialog>
{/*             <div className="w-full bg-accent py-8">
                <h2 className="text-center text-3xl">Portamedallas</h2>
            </div> */}
            <img className="lg:pt-0 pt-24 bg-primary" src="/assets/banner-feria-pm.jpg" alt="Banner de Feria en Portamedallas" />
            <div className="flex lg:flex-row flex-col items-center">
                <h2 className="lg:w-1/5 w-auto p-8 text-3xl font-bold">Tienda</h2>
                <div className="lg:w-4/5 w-full lg:px-8 md:px-6 px-4 flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-center">
                    <label className="lg:w-3/4 w-full input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" value={searchItem} placeholder="Buscar..." onChange={handleInputChange} />
                        <box-icon name='search'></box-icon>
                    </label>
                    <div className="dropdown lg:w-1/4 w-full">
                        <div tabIndex={0} role="button" className="btn w-full m-1">
                            Ordenar por
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="btn btn-ghost" onClick={() => setFilters({ ...filters, orderBy: 'lower' })}>Precio más bajo</li>
                            <li className="btn btn-ghost" onClick={() => setFilters({ ...filters, orderBy: 'higher' })}>Precio más alto</li>
                            <li className="btn btn-ghost" onClick={() => setFilters({ ...filters, orderBy: 'asc' })}>Por nombre (A-Z)</li>
                            <li className="btn btn-ghost" onClick={() => setFilters({ ...filters, orderBy: 'desc' })}>Por nombre (Z-A)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-8 min-h-[80vh] flex lg:flex-row flex-col">
                <Filters setFilters={setFilters} />
                <Items products={fiProd} />
            </div>
        </section>
    )
}

export default Shop