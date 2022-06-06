import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Madonna']);

    // const handleAdd = () => {

    //     const newCategories = [...categories, 'Drama'];
    //     setCategories(newCategories);

    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories }
            />
            <hr />

            <ul>
                {
                    categories.map(category => (
                        <GifGrid
                            category={ category }
                            key={ category } 
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default GifExpertApp;