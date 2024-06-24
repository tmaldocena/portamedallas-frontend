/* eslint-disable react/prop-types */
const CardImage = ({ imgURL, mainImage, changeImage }) => {
    const handleClick = () => {
        if (mainImage !== imgURL) {
            changeImage(imgURL);
        }
    };



    return (
        <div
            className={`border-2 rounded-xl ${mainImage === imgURL
                    ? "border-primary"
                    : "border-transparent"
                } cursor-pointer max-sm:flex-1 transition-all hover:scale-105`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-center bg-cover rounded-xl lg:p-4'>
                <img
                    src={imgURL}
                    alt='item colletion'
                    className='lg:w-16 w-24 object-contain rounded-xl'
                />
            </div>
        </div>
    );
};


export default CardImage