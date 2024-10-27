import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  // const [isBACCI, setisBACCI] = useState(false);
  const [isBold, setisBold] = useState(false);
  const [isAesthetic, setisAesthetic] = useState(false);
  const [isCursive, setisCursive] = useState(false);
  const [isCircular, setisCircular] = useState(false);
  const [isItalics, setisItalics] = useState(false);

  const handleUpClick = () => {let newText = text.toUpperCase();setText(newText);};
  const handleLoClick = () => {let newText = text.toLowerCase();setText(newText);};
  const handleItClick = () => {setisItalics(!isItalics);};
  const handleBoClick = () => {setisBold(!isBold);};
  const handleAeClick = () => {setisAesthetic(!isAesthetic);};
  const handleCuClick = () => {setisCursive(!isCursive);};
  const handleCiClick = () => {setisCircular(!isCircular);};
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    var myText = document.getElementById('mybox');
    myText.select();
    navigator.clipboard.writeText(myText.value);
  };
  const handleOnChange = (event) => {setText(event.target.value);};
  const clearText = () => {setText("");};
  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalics ? 'italic' : 'normal',
    textDecoration: isAesthetic ? 'underline' : 'none',
    fontFamily: isCursive ? 'cursive' : 'sans-serif',
    display: 'inline-block',
    textAlign: isCircular ? 'center' : 'left',
    borderRadius: isCircular ? '50%' : '0',
    padding: isCircular ? '20px' : '0',
    backgroundColor: isCircular ? '#fff' : 'transparent',
  };
  const txtArea = {
    backgroundColor: props.mode === 'dark' ? '#003333' : '#fff',
    color: props.mode === 'dark' ? '#FFFFFF' : '#000000'
  };
  
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={txtArea}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleBoClick}>Bold</button>
        <button className="btn btn-primary mx-2" onClick={handleAeClick}>Aesthetic</button>
        <button className="btn btn-primary mx-2" onClick={handleCuClick}>Cursive</button>
        <button className="btn btn-primary mx-2" onClick={handleCiClick}>Circular</button>
        <button className="btn btn-primary mx-2" onClick={handleItClick}>Italics</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes to Read</p>
        <h2>Preview</h2>
        <p style={textStyle}>{text}</p>
      </div>
    </>
  );
}
