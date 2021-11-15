import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Filter() {
    const [information, setInfo] = useState(false)

    function handleInfo() {
        setInfo(!information)
    }
    return (
        <div className='filter-container'>
            <h1>Filter By</h1>
            <Accordion allowMultipleExpanded allowZeroExpanded className='filter-accordion'>
                <AccordionItem className='filter-accordion-item'>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='filter-accordion-title' onClick={handleInfo}>
                                <h2>Collection</h2>
                                {information ? <span>-</span> : <span>+</span>}
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className='filter-accordion-info'>
                        <Link to='/shop/' style={{ textDecoration: 'none' }}><p>All </p></Link>
                        <Link to='/shop/trees' style={{ textDecoration: 'none' }}><p>Trees</p></Link>
                        <Link to='/shop/ornaments' style={{ textDecoration: 'none' }}><p>Ornaments</p></Link>
                        <Link to='/shop/lights' style={{ textDecoration: 'none' }}><p>Lights</p></Link>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}