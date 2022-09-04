import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converte to uppercase!", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converte to lowercase!", "success");
    }
    
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }

    const handleExtraSpacees = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success")
    }

    const [text, setText] = useState('');
    return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className='my-3'>
                <textarea className='form-control' rows='8' value={text} onChange={handleOnChange}  id="myBox" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleExtraSpacees}>Clear Extra Spaces</button>
        </div>
        <div className='container my-3'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <ul className="list-group">
            <h1>Your Text Details :</h1>
            <li className="list-group-item"><span className='text-danger'> {text.split(" ").filter((element)=>{return element.length!==0}).length}</span> Words</li>
            <li className="list-group-item"><span className='text-danger'> {text.length}</span> characters</li>
            <li className="list-group-item"><span className='text-danger'> {text.split(".").filter((element)=>{return element.length!==0}).length}</span> Sentences</li>
            <li className="list-group-item"><span className='text-danger'> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</span> Minutes to read</li>
        </ul>
            <h2>Preview : </h2>
            <p>{text.length>0?text:"Nothing to preview..."}</p>
        </div>
    </>
  )
}
