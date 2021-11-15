import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



export default function ItemDetails() {
    const [item, setItem] = useState({})
    const [information, setInfo] = useState(false)
    const [shippingInfo, setShipping] = useState(false)
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        fetch(`/items/${id}`)
            .then(res => res.json())
            .then((item) => {
                setItem(item)
                console.log(item);
                window.scrollTo(0, 0)
            })
    }, [id])

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
        history.push('/shop')
    }

    function handleInfo() {
        setInfo(!information)
    }

    function handleShipping() {
        setShipping(!shippingInfo)
    }

    const { description, image, info, name, price, shipping } = item

    // console.log(info);

    return (
        <div className='item-container'>
            <div className='product-container'>
                <h1>Home / Shop / {name} </h1>
                <div className='item'>
                    <div className='item-image'>
                        <img src={image} alt='item image' />
                        <p className='item-desc'>{description}</p>
                    </div>
                    <div className='item-info'>
                        <h1>{name}</h1>
                        <h1 className='price'>${price}.00</h1>
                        {/* <h3>Quantity:</h3><br />
                        <input type='text' placeholder='1' /><br /> */}
                        <button onClick={handleAdd}>Add to Cart</button>
                        <Accordion allowMultipleExpanded allowZeroExpanded className='accordion'>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='accordion-title' onClick={handleInfo}>
                                            <h1>Product Info</h1>
                                            {information ? <span>-</span> : <span>+</span>}
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='accordion-info'>
                                    <p>{info}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='accordion-title' onClick={handleShipping}>
                                            <h1>Shipping Info</h1>
                                            {shippingInfo ? <span>-</span> : <span>+</span>}
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='accordion-info'>
                                    <p>{shipping}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}