import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
        setLoading(false);
    }

    useEffect(() => {
        getImages()
    } , []);

    return {images, loading};
}


