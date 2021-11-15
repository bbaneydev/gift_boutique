import React, { useState } from 'react'
import '../App.css'
import CartCard from './CartCard'


export default function Cart({ cart, deleteCart }) {
    const [cartInfo, setCartInfo] = useState([])

    const card = cart.map(item => {
        for (const [key, value] of Object.entries(item)) {
            return item.items
        }
    })

    const cartId = cart.map(item => {
        for (const [key, value] of Object.entries(item)) {
            return item.id
        }
    })

    let subTotal = 0

    const cartCard = card.map(item => {
        return <CartCard key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            deleteCart={deleteCart}
            cartId={cartId}
            id={item.id}
        />
    })

    card.map(item => {
        const total = item.price
        subTotal = subTotal + total;
    })



    return (
        <div className='cart-page'>
            <div className='cart-container'>
                <div className='cart-info'>
                    <h1>My Cart</h1>
                    <div className='cart-line'></div>
                    <div className='cart-card-container'>
                        {cartCard}
                    </div>
                </div>
                <div className='cart-total'>
                    <h1>Order Summary</h1>
                    <div className='cart-line2'></div>
                    <h1 className='subtotal'>Subtotal: <span>${subTotal}.00</span></h1>
                    <h1 className='subtotal'>Shipping: <span>FREE</span></h1>
                    <div className='cart-line2'></div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}