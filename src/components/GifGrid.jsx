import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import useGetGifs from '../hooks/useGetGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
    console.log('GifGrid - render', category);
    const {
        images,
        loading,
    } = useGetGifs({category});

    return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map( img => 
                    <GifItem
                        key={img.id} 
                        { ...img }
                    />
                    )
            }
        </div>
    </>
    )
}

export default GifGrid
