import { useState } from 'react';
import AddCategory from './src/components/AddCategory';
import GiftGrid from './src/components/GiftGrid';

export default function GiftExpertApp() {
    const [categories, setCategories] = useState(['Sports', 'Electronics']);

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
      <h1>Gift expert App</h1>
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      {
        categories.length > 0 ?
        categories.map((category, index) => (
            <GiftGrid 
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
