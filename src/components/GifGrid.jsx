import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs'; 

export const GifGrid = ({ category }) => {
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
                    (<GifItem
                        key={img.id} 
                        { ...img }
                    />)
                    )
            }
        </div>
    </>
    )
}
