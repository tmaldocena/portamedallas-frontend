/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardImage from "./CardImage";

const ViewImage = ({ item }) => {

    const [bigImage, setBigImage] = useState('');
    const [slug, setSlug] = useState();

    const getProduct = async () => {
        try {
            const res = fetch(`http://localhost:3000/api/products/${item}/slug`)

            if (!res.ok) {
                console.log('There was an error!');
            }

            const json = await (await res).json()

            console.log(json);
            setSlug(json);
        } catch (err) {
            console.log(err);
        }
    }

    
    useEffect(() => {
        getProduct();

        return setSlug('');
    }, []);

    const images = [ `../assets/products/${slug?.product_slug}/${slug?.product_slug}.jpg`,
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}2.jpg`,
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}3.jpg`,
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}4.jpg`
    ]
    const pink = [
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}-pink.jpg`,
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}-pink2.jpg`,
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}-pink3.jpg`,
        `../assets/products/${slug?.product_slug}/${slug?.product_slug}-pink4.jpg`
    ]

    console.log(pink);

    return (
        <div className="mt-2 relative lg:px-0 md:px-8 px-4 flex-1 flex lg:flex-row-reverse flex-col gap-2 justify-center items-center ">
            <img src={bigImage || `../assets/products/${slug?.product_slug}/${slug?.product_slug}.jpg`} alt="show collection" className="object-contain w-auto lg:h-96 rounded-lg shadow-2xl" />
            <div className="flex lg:flex-col-reverse flex-row-reverse lg:gap-4 md:gap-12 gap-4 mt-6" >
                {
                    images?.map((image, index) => (
                        <CardImage imgURL={image} key={index} mainImage={bigImage} changeImage={setBigImage} />
                    ))
                }
            </div>
        </div>
    );
};


export default ViewImage