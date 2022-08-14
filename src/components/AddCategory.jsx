import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return; 
        setInputValue('');           
        onNewCategory(inputValue.trim());        
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Search for a gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    </div>
  )
}
