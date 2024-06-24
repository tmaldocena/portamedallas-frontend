import { useEffect, useState } from "react";
import Filters from "../components/shop/Filters"
import Items from "../components/shop/Items"


const Shop = () => {

    const [searchItem, setSearchItem] = useState('')
    const [filteredItems, setFilteredItems] = useState([])

    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 150001,
        colors: ['blue', 'orange', 'black', 'pink'],
        orderBy: 'name-asc'
    });

    const fetchingData = async () => {
        try {
            const res = fetch('http://localhost:3000/api/products')

            if (!res.ok) {
                console.log('There was an error!');
            }

            const json = await (await res).json()

            console.log(json)
            setFilteredItems(json);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchingData()
    }, []);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        console.log(searchTerm);
        const filtered = filteredItems.filter((user) =>
            user.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    }


    const filterProducts = () => {
        return filteredItems.filter((prod) =>
            prod.product_price <= filters.maxPrice
        )
    }

    let fiProd = filterProducts()

    const sortByName = (type) => {
        if (type === 'asc') {
            fiProd.sort((a, b) => {
                const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        } else {
            if (type === 'desc') {
                fiProd.sort((a, b) => {
                    const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });
            }
        }
    }




    fiProd = filteredItems.filter((prod) => prod.product_category === filters.category || filters.category === 'all')


    console.log(fiProd);

    return (
        <section className={"w-full text-primary font-open"} >
            <div className="w-full bg-accent py-8">
                <h2 className="text-center text-3xl">Portamedallas</h2>
            </div>
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
                            <li className="btn btn-ghost">Precio más bajo</li>
                            <li className="btn btn-ghost">Precio más alto</li>
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