import React, { useState } from "react";


export default function TextForm(props) {

    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleonChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    const [previewText, setPreviewText] = useState("");

    const handlePreClick = () => {
        setPreviewText(text)
    }

    const handleClearClick=()=>{ 
        setText("");
        setPreviewText("");
    };

    const handleBoldClick=()=>{
        setPreviewText(<strong>{text}</strong>);
    }



    return (
        <>
            <h1 className="h1">{props.textTitle}</h1>
            <textarea className="textform" value={text} onChange={handleonChange} cols="30" rows="10"></textarea>
            <div className="container">

                <button type="button" className="btn btn-primary mx-2" onClick={handleupClick} >Convert to uppercase</button>

                <button type="button" className="btn btn-secondary mx-2" onClick={handlelowClick} >Convert to lowercase</button>

                <button type="button" className="btn btn-success mx-2" onClick={handlePreClick} >Preview</button>

                <button type="button" className="btn btn-danger mx-2" onClick={handleClearClick} >Clear All</button>

                <button type="button" className="btn btn-warning mx-2" onClick={handleBoldClick} >Bold</button>

            </div>

            <div className="container my-5">
                <h2>
                    Your Text Summary
                </h2>
                <p>{text.split(" ").length - 1} words and {text.length} letters</p>
                <p>{0.008 * text.split(" ").length - .008} Minutes read</p>

                <h3>Preview</h3>
                <p>{previewText}</p>


            </div>
        </>
    )
}