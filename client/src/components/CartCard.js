import React from 'react'
import { Link } from 'react-router-dom'

export default function CartCard({ name, price, image, deleteCart, cartId, id }) {

    function handleDelete() {
        fetch(`/carts/${cartId}`, {
            method: 'DELETE'
        })
        deleteCart(cartId)
    }

    return (
        <div className='cart-card'>
            <Link to={`shop/${id}`}>
                <img src={image} />
            </Link>
            <h1>{name}</h1>
            <span>${price}.00</span>
            <p onClick={handleDelete}>X</p>
        </div>
    )
}