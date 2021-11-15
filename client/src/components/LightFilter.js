import React from 'react'
import Card from './Card'
import Filter from './Filter'
import '../App.css'

export default function LightFilter({ filterLights }) {

    const filter = filterLights.map(item => {
        return <Card key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            id={item.id}
        />
    })

    return (
        <div className='shop'>
            <h1 className='shop-h1'>Lights</h1>
            <div className='shop-line'></div>
            <div className='card-content-container'>
                <Filter />
                <div className='card-container'>
                    {filter}
                </div>
            </div>
        </div>
    )
}