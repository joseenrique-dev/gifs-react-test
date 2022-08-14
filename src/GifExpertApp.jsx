import { useState } from 'react';
import {
  AddCategory,
  GifGrid,
} from './components';


export default function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes( newCategory) ) return;
        setCategories([newCategory, ...categories]);
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
