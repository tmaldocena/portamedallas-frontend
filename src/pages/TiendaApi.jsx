import { useEffect, useState } from "react";

const TiendaApi = () => {
    const [items, setItems] = useState([]);


    const fetchingData = async () => {
        try{
            const res = fetch('http://localhost:3000/api/products')

            if(!res.ok){
                console.log('There was an error!');
            }

            const json = await (await res).json()

            console.log(json)
            setItems(json);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchingData()
    }, []);

    return (
        <div>
            <h1>Tienda con API</h1>
            <ul>
                <li></li>
                { items.map((item, key) => {
                    return (
                        <li key={key}>{item.product_name}</li>
                    )
                })}
            </ul>

        </div>
    )
}

export default TiendaApi