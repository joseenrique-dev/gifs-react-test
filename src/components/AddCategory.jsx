import { useState } from 'react';

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return; 
        onNewCategory(inputValue.trim());        
        setInputValue('');           
    }
  return (
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
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

export default AddCategory
