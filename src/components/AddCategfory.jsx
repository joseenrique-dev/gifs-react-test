import { useState } from 'react';

const AddCategfory = () => {
    const [inputValue, setInputValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }
  return (
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
            <input 
                type="text" 
                placeholder="Search for a gift"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    </div>
  )
}

export default AddCategfory
