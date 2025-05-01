import { useState } from "react";
export function MyForm() {
  const [inputValue, setInputValue] = useState('');

 const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
  
}