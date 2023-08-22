import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=""
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text,setText]=useState('Enter text here');
//   text="ajay singh"; //wrong way to change the text
//   setText("ajay singh "); //correct way to change the text
  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">Enter the text here</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to the Uppercase</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleLowClick}>Convert to the Lowercase</button>
            <button className="btn btn-success my-2" onClick={handleClearClick}>Clear</button>


        </div>
    </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} mintues to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
