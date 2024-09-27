import React, { useState } from 'react'

export default function TextForm(props) {
    const handleclick=()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const handleclick2=()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    const handleclick3=()=>{
        let newtext = ''
        settext(newtext)
    }
    const handleclick4=()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleclick5=()=>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }
    const handlechange=(event)=>{
        settext(event.target.value)
    }

    const [text, settext] = useState('');
  return (
    <>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={handlechange} id="mybox" style={{
                backgroundColor:props.mode === 'dark'?'#344555':'white',
                color:props.mode === 'dark'?'white':'black',
                border: props.mode === 'dark' ? '1px solid white' : '1px solid black'
                }} rows="8"></textarea>
        </div>
        <button className="btn btn-primary btn-md" onClick={handleclick}>change to upper case</button>
        <button className="btn btn-primary mx-2 btn-md" onClick={handleclick2}>change to lower case</button>
        <button className="btn btn-primary  mx-2 btn-md" onClick={handleclick3}>clear</button>
        <button className="btn btn-primary  mx-2 btn-md" onClick={handleclick4}>copy text</button>
        <button className="btn btn-primary  mx-2 btn-md" onClick={handleclick5}>remove space</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h4>Tetx summary</h4>
        <p>text has {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} time to read text</p>
        <h4>preview of text</h4>
        <p>{text.length>0?text:"Enter something in the textbox to preview it...."}</p>
    </div>
    </>  
  )
}
