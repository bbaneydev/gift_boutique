import React, { useState } from 'react'
import Card from './Card'
import Filter from './Filter'

export default function Shop({ items }) {

    const list = items.map(item => {
        return <Card key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            id={item.id}
        />
    })
    return (
        <div className='shop'>
            <h1 className='shop-h1'>Shop All</h1>
            <div className='shop-line'></div>
            <div className='card-content-container'>
                <Filter />
                <div className='card-container'>
                    {list}
                </div>
            </div>
        </div>
    )
}