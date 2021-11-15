import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, image, name, price }) {

    const handleAdd = () => {
        fetch('/carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item_id: id,
                quantity: 1
            })
        })
    }



    return (
        <div className='card'>
            <Link to={`/shop/${id}`}>
                <img src={image} alt='xmas-image' />
                <p className='view'>Quick View</p>
            </Link>
            <h1>{name}</h1>
            <p>${price}.00</p>
            <div className='hidden'>
                <button onClick={handleAdd}>Add to Cart</button>
            </div>
        </div>
    )
}