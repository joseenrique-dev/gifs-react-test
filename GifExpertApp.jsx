import { useState } from 'react';
import AddCategory from './src/components/AddCategory';
import GifGrid from './src/components/GifGrid';

export default function GifExpertApp() {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes( newCategory) ) return;
        setCategories((categories) => [...categories, newCategory]);
    } 

    const showErrorMessage = (message) => {
        return (
            <div className="error-message">
                {message}
            </div>
        )
    }

  return (
    <div>
      <h1>Gif expert App</h1>
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      {
        categories.length > 0 ?
        categories.map((category, index) => (
            <GifGrid 
              key={index} 
              category={category} 
            />
          ))
        :
        <p>No categories yet :(</p>
      }
    </div>
  )
}
