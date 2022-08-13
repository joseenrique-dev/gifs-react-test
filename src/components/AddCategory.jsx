import { useState } from 'react';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        debugger
        console.log(inputValue);
        setCategories((categories)=> [...categories, inputValue]);
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
