import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import p from '../images/pinterest.png'
import i from '../images/instagram.png'
import f from '../images/facebook.png'
import icon from '../images/icon.png'
import cartpic from '../images/cart.png'

export default function NavBar({ openModal, currentUser, handleLogout, filterTrees, filterLights, filterOrnaments, cart }) {

    console.log(filterTrees);

    const cartCount = cart.length

    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={logo} className='logo-image' />
                <div className='social-icons'>
                    <img src={p} />
                    <img src={i} />
                    <img src={f} />
                </div>
            </div>
            <div className='links'>
                <h1>GIFT ME BOUTIQUE</h1>
                <div>
                    <Link to='/'><a href='/'>Home</a></Link>
                    <Link to='/shop'><a href='/shop' style={{ width: '80px' }}>Shop All</a></Link>
                    <Link to='/shop/trees'><a href='/shop/trees' onClick={filterTrees}>Trees</a></Link>
                    <Link to='/shop/ornaments'><a href='/shop/ornaments' onClick={filterOrnaments}>Ornaments</a></Link>
                    <Link to='/shop/lights'><a href='/shop/lights' onClick={filterLights}>Lights</a></Link>
                    <a className='about' href='#'>About</a>
                </div>
            </div>
            <div className='cart'>
                <img className="icon-image" src={icon} />
                {currentUser ?
                    <span onClick={handleLogout} className='login'>Log Out</span>
                    :
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <span className='login' onClick={openModal}>Log In</span>
                    </Link>
                }
                <Link to='/cart' style={{ textDecoration: 'none', marginLeft: '10%', marginRight: '2%' }}>
                    <span className='cart-span'>Cart</span>
                </Link>
                <img className='cart-image' src={cartpic} />
                {cartCount ? <p>{cartCount}</p> : null}
            </div>
        </div>
    )
}