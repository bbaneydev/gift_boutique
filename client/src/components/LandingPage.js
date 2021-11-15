import React from 'react'
import landing from '../images/landing.jpg'
import tree from '../images/tree1.webp'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className='landing-container'>
            <div className='cta'>
                {/* <img src={landing} className='landing-image' /> */}
                <h1>Christmas Specials</h1>
                <p>YOUR ONE STOP SHOP FOR THE HOLIDAYS</p>
                <Link to='/shop'><button>Shop Now</button></Link>
            </div>
            <div className='bottom-cta'>
                <div className='trees'>
                    <div className='trees-img'>
                        {/* <img src={tree} /> */}
                    </div>
                    <h1>Trees</h1>
                    <div className='line'></div>
                    <Link to='/shop/trees'><button>Shop Now</button></Link>
                </div>
                <div className='trees'>
                    <div className='trees-img2'>
                        {/* <img src={tree} /> */}
                    </div>
                    <h1>Lights</h1>
                    <div className='line'></div>
                    <Link to='/shop/lights'><button>Shop Now</button></Link>
                </div>
                <div className='trees'>
                    <div className='trees-img3'>
                        {/* <img src={tree} /> */}
                    </div>
                    <h1>Ornaments</h1>
                    <div className='line'></div>
                    <Link to='/shop/ornaments'><button>Shop Now</button></Link>
                </div>
            </div>
        </div>
    )
}