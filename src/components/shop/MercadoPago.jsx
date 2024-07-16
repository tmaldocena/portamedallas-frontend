import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect } from "react";
import { useState } from "react";
import UseCart from "../../hooks/useCart";

const MercadoPago = () => {

    const { getTotal } = UseCart();

    const [preferenceId, setPreferenceId] = useState('')
    //*initMercadoPago('TEST-4ea7b5e8-ac82-4cfd-8d09-9b7d033ed394');
    /* initMercadoPago('APP_USR-47f58598-3bcf-4d7c-a334-bbfeac70c90f'); */
    initMercadoPago('APP_USR-1f4b7012-507a-4c5a-8663-be438b26ca82'); 


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        const prefID = await createID();
        //console.log(prefID);

    }, [])


    const createID = async () => {
        const body = {
            title: 'Pedido en Portamedallas',
            quantity: 1,
            price: (getTotal() + 12000)
        }
        await fetch('http://localhost:3000/process_payment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res) => res.json())
            .then(res => setPreferenceId(res.id) );
            
    }

/* 
    const createPreference = async () => {

        const body = {
            title: 'Prueba',
            quantity: 1,
            price: (getTotal() + 12000)
        }

        try {
            const response = await fetch('http://localhost:3000/process_payment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            //const { id } = response.data;
            console.log(response);
            //setPreferenceId(id);
            //return id;
        } catch (error) {
            console.log('error!', error);
        }
    } */

    return (
        <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { actions: 'buy', valueProp: 'security_details' } }} 
            locale="es"
        />
    )
}

export default MercadoPago