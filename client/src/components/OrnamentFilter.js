import React from 'react'
import Card from './Card'
import Filter from './Filter'

export default function OrnamentFilter({ filterOrnaments }) {

    const filter = filterOrnaments.map(item => {
        return <Card key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            id={item.id}
        />
    })

    return (
        <div className='shop'>
            <h1 className='shop-h1'>Ornaments</h1>
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