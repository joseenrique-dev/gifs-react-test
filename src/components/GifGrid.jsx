import useFetchGifs from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    console.log('GifGrid - render', category);
    const {
        images,
        loading,
    } = useFetchGifs(category);

    return (
    <>
        <h3>{category}</h3>
        {loading && <h2>Loading...</h2>}
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
