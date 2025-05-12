import React,{useState} from 'react';
function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className='Color-picker-container'>
            <h1 className='heading'>Color Picker</h1>
            <div className='color-picker-box' style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color:</label><br/>
            <input type="color" value={color} onChange={handleColorChange}/>

        </div>
    );

}

export default ColorPicker