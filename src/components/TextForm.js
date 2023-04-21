import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const convertToUppercase = () => {
        setText(text.toUpperCase());
        props.sendAlert("Converted To Uppercase", 'success');
    }

    const convertToLowercase = () => {
        setText(text.toLowerCase());
        props.sendAlert("Converted To Lowercase", 'success');
    }

    const reverseText = () => {
        setText(text.split('').reverse().join(''))
        props.sendAlert("Reversed text", 'success');
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.sendAlert("Copied to Clipboard !", 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={convertToUppercase}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={convertToLowercase}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={reverseText}>Inverse text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={copyToClipboard}>Copy to Clipboard</button>
            </div>
        </div>

        <div className="container my-4">
            <h2>Your Text Summary: </h2>
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
            <p>Time required to read {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} in minutes</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
