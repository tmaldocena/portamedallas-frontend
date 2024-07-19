/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect } from "react";
import { useState } from "react";
import UseCart from "../../hooks/useCart";

const MercadoPago = ({ form }) => {

    const { getTotal } = UseCart();

    const [preferenceId, setPreferenceId] = useState('');
    const [idOrden, setIdOrden] = useState('')

    initMercadoPago('APP_USR-69e7ea88-f791-4587-8e96-a62af282dfe3'); 


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        const prefID = await createID();
        //console.log(prefID);

    }, [])

    const saveOrder = async () => {
        fetch('http://localhost:3000/api/orden/update',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }).then(res => res.json()).then(res => {
                const id = res.rows[0][0];
                setIdOrden(id);
                //location.href = `/order/success?id=${id}`;
            })
    }

    const createID = async () => {
        const body = {
            title: 'Pedido en Portamedallas',
            quantity: 1,
            price: (getTotal() + 12000),
            id: idOrden
        }
        await fetch(`http://localhost:3000/process_payment`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res) => res.json())
            .then(res => setPreferenceId(res.id) );
            
    }

    return (
        <div onClick={ () => saveOrder() }>
        <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { actions: 'buy', valueProp: 'security_details' } }} 
            locale="es"
        />
        </div>
    )
}

export default MercadoPago