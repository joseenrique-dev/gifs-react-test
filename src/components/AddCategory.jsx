import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={onSubmit} aria-label='form'>
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
} 