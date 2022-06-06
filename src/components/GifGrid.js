import { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages );
    // }, []);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Cargando</p> }

            <div className='card-grid'>
                {
                    images.map(image => (
                        <GifGridItem
                            { ...image }
                            key={ image.id }
                        />
                    ))
                }
            </div>
        </>
    )
}
