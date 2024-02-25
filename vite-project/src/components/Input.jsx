import { useState } from 'react'

import FontList from './FontList';

const colors = [
    {color: 'pink', id: '1'},
    {color: 'green', id: '2'},
    {color: 'blue', id: '3'},
    {color: 'purple', id: '4'}
]



export default function CustomText(){
    const [text, setText] = useState("");
    const [color, setColor] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.Log({text});
        return {text};
      }


   
      const colorOptions = colors.map(color =>
        <option value={color.color} key={color.color} style={{backgroundColor: color.color}} className='color'></option>
        )

    

       
  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <label>Custom text:
        <input
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    
      
    </form>
    <select onChange={event => setColor(event.target.value)}
                value={color}>{colorOptions}</select>
    <div style={{color: color}}>
    <FontList handleSubmit = {text} />
    </div>
    
    </>
  )
}