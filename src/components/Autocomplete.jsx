import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../utils/products.json'

function Autocomplete() {
    const [searchItem, setSearchItem] = useState('')
    const [filteredItems, setFilteredItems] = useState(products)

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = products.filter((prod) =>
            prod.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(filteredItems);
    }


    return (
        <div className='relative text-center w-full'>
            <li className="form-control">
                <label className="input input-ghost flex items-center gap-2 text-primary" id='searchBar'>
                    <input type="text" className="grow " placeholder="Buscar portamedallas" onChange={handleInputChange} value={searchItem} />
                    <box-icon name='search' color='#848587'/>
                </label>
            </li>
            {searchItem.length >= 3 && (
                <div className="absolute bg-base-100 w-full z-10">
                    {filteredItems.length > 0 ? (
                        <ul >
                            {filteredItems.map((result, index) => (
                                <Link to={'/item/' + result.product_id} key={index} onClick={() => searchItem('')}>
                                    <li className='p-2 hover:bg-base-200 hover:text-primary'>
                                        <span className='flex flex-row gap-4 '>
                                            <div className="avatar">
                                                <div className="w-8 rounded">
                                                    <img src={`./assets/products/${result.product_slug}/${result.product_slug}.jpg`} />
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-start'>
                                                <span>{result.product_name}</span>
                                                <span className='text-xs'>${result.product_price}</span>
                                            </div>
                                        </span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    ) : (
                        <div></div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Autocomplete;