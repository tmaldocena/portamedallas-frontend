
const InfoVideo = () => {
    return (
        <section className="bg-primary text-base-100 py-8 font-open lg:px-16 px-8 flex flex-col items-center">
            <div className="flex lg:flex-row flex-col items-center gap-12 justify-center">
                <div className="lg:w-2/4 w-full">
                    <box-icon name='medal' type='solid' color='#ffe4e6' size="lg"></box-icon>
                    <h2 className="text-2xl font-bold pb-4">¿Cómo los hacemos?</h2>
                    <p className="text-lg">Materiales de calidad, resitentes y de fácil colocado, son algunas de las características que presentan nuestros Portamedallas, haciendo de ellos un accesorio escencial para mostrar tus logros deportivos y personales.</p>
                </div>
                <video className="w-3/12 rounded-lg shadow-xl" controls controlsList="nodownload nofullscreen noremoteplayback">
                    <source src="/assets/portamedallas-promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default InfoVideo