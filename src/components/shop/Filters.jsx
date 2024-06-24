/* eslint-disable react/prop-types */
import { useState } from "react";

const Filters = ({ setFilters }) => {

    const [range, setRange] = useState(150000);
    const [category, setCategory] = useState('all');

    const categories = [
        'Deportes Grupales',
        'Deportes Individuales',
        'Otros',
        'Running',
        'Bike',
        'Natación',
        'Gymnastics',
        'Tenis',
        'Mascotas/Portacollares',
        'Triatlón',
        'a',
        'b'
    ]

    const colors = [
        { hex: '#974', name: 'Azul' },
        { hex: '#F09', name: 'Naranja' },
        { hex: '#121', name: 'Negro' },
        { hex: '#EE2', name: 'Rojo' }
    ]

    const handleChange = (e) => {
        setRange(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            maxPrice: e.target.value
        }))
    }

    const changeCat = (e) => {
        setCategory(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            category: category
        }))
    }


    return (
        <>
            <div className="lg:hidden collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h5 className="text-xl font-bold">Filtros</h5>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                </div>
                <div className="collapse-content">
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                            <h6>Categorias</h6>
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <div className="collapse-content">
                            <div className="flex flex-col items-start">
                                <input type="radio" name="category" value='all' aria-label='Todos' className="btn btn-sm btn-link no-underline hover:no-underline"/>
                                {categories.map((cat, key) => {
                                    return (
                                        <input type="radio" name="category" key={key} aria-label={cat} className="btn btn-sm btn-link no-underline hover:no-underline"/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                            <h6>Precio</h6>
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <div className="collapse-content">
                            <div className="tooltip tooltip-primary w-full" data-tip={'$' + range}>
                                <input type="range" min={70000} max={150001} value={range} className="range range-primary" onChange={handleChange} />
                            </div>
                            <span>Precio:  { range }</span>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                            <h6>Colores</h6>
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <div className="collapse-content">
                            <div className="flex flex-col items-start">
                                {colors.map((color, key) => {
                                    return (
                                        <input type="checkbox" key={key} aria-label={color.name} defaultChecked className='btn btn-sm btn-link no-underline hover:no-underline' />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:inline hidden w-1/5">
                <h5 className="text-xl font-bold">Filtros</h5>

                <div className="divider"></div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h6>Categorias</h6>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="collapse-content">
                    <form>

                        <div className="flex flex-col items-start" >
                            <input type="radio" name="category" value='all' aria-label='Todos' className="btn btn-sm btn-link no-underline hover:no-underline" checked={category==='all'} onClick={changeCat}/>
                            {categories.map((cat, key) => {
                                return (
                                    <input type="radio" name="category" key={key} value={cat} aria-label={cat} className="btn btn-sm btn-link no-underline hover:no-underline" onClick={changeCat}/>
                                )
                            })}
                        </div>
                    </form>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h6>Precio</h6>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="collapse-content">
                        <div className="tooltip tooltip-primary w-full" data-tip={'$' + range}>
                            <input type="range" min={70000} max={150001} value={range} className="range range-primary" onChange={handleChange} />
                            <span>Precio: ${ range }</span>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h6>Colores</h6>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col gap-2 items-start">
                            {colors.map((color, key) => {
                                return (
                                    <input type="checkbox" key={key} aria-label={color.name} defaultChecked className='btn btn-sm btn-link no-underline hover:no-underline' />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters