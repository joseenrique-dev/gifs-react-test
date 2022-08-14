import React from 'react'
import { getGifs } from '../helpers/getGifs';

const GiftGrid = ({ category }) => {

    getGifs();

    return (
    <>
        <h3>{category}</h3>  
    </>
    )
}

export default GiftGrid
