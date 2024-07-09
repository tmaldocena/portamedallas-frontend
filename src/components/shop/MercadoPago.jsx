import { initMercadoPago, Payment, Wallet } from "@mercadopago/sdk-react";
import { useEffect } from "react";
import { useState } from "react";

const MercadoPago = () => {

    const [preferenceId, setPreferenceId] = useState('')
    initMercadoPago('TEST-4ea7b5e8-ac82-4cfd-8d09-9b7d033ed394');



    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {

        const prefID = await createPreference();
        console.log(prefID);

    }, [])



    const createPreference = async () => {

        const body = {
            title: 'Prueba',
            quantity: 1,
            price: 100
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
            console.log(response.data);
            //setPreferenceId(id);
            //return id;
        } catch (error) {
            console.log('error!', error);
        }
    }

    return (
        <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: 'smart_option' } }}
        />
    )
}

export default MercadoPago