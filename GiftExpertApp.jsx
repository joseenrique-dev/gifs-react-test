import { useState } from 'react';
import AddCategfory from './src/components/AddCategory';

export default function GiftExpertApp() {
    const [categories, setCategories] = useState(['Sports', 'Electronics']);

  return (
    <div>
      <h1>Gift expert App</h1>
      <AddCategfory setCategories={setCategories} categories={categories}/>
      {
        categories.length > 0 ?
        categories.map((category, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{index+1}: {category}</li>
              </ul>
            </div>
          )
        })
        :
        <p>No categories yet :(</p>
      }
    </div>
  )
}
