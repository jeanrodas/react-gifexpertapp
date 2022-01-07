import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


//const apiKey = 'SzmUWi9qUzc4LjqNo6x9U86yk2PP0NkC';

const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className='card-grid'>
                {
                        images.map( img => (
                            <GifGridItem i
                            key={img.id}
                            {...img} />
                        ))
                    }
            </div>
        </>
        
    )
}

export default GifGrid
