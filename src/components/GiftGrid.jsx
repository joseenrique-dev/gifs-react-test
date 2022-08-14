import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';

const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);
        console.log('IMG',images);
        setImages(images);
    }

    useEffect(() => {
        getImages()
    } , []);

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

export default GiftGrid
