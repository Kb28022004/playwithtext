import React from "react";
import { useState } from "react";

const Textform = (props) => {
  const [text, settext] = useState("");
  const handleUp = () => {
    const newText = text.toUpperCase();
    settext(newText);
    props.showalert("Text has been converted into Upercase","success")

  };
  const handleLow = () => {
    const newText = text.toLowerCase();
    settext(newText);
    props.showalert("Text has been converted into lowercase","success")
  };
  const handleRem = () => {
    const newText = text.split(/[ ] +/);
    settext(newText.join(" "));
    props.showalert("Extra Spaces has been removed ","success")

  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text has been copied ","success")

  };
  const handleDel = () => {
    const newText = " ";
    settext(newText);
    props.showalert("Text has been deleted","success")

  };
  const handleonchange = (e) => {
    settext(e.target.value);
  };
  return (
    <>
    <div className="container my-2" style={{color:props.mode==="light"?"black":"white",}} >
      
       <h1 style={{textAlign:"center",fontSize:"45px"}} ><marquee>{props.heading}</marquee></h1>
       <div className="mb-2 my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
         style={{backgroundColor:props.mode==="light"?"black":"white",color:props.mode==="dark"?"black":"white"}}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <button disabled={text.length<1}  onClick={handleUp} className= {`btn btn-${props.mode==="light"?"dark":"primary"} mx-2 my-2`}>Convert into Uppercase</button>
      <button disabled={text.length<1}  onClick={handleLow} className={`btn btn-${props.mode==="light"?"dark":"primary"} mx-2 my-2`}>Convert into Lowercase</button>
      <button disabled={text.length<1}  onClick={handleRem} className={`btn btn-${props.mode==="light"?"dark":"primary"} mx-2 my-2`}>Remove Extra Spaces</button>
      <button disabled={text.length<1}  onClick={handleCopy}className={`btn btn-${props.mode==="light"?"dark":"primary"} mx-2 my-2`}>Copy your text</button>
      <button disabled={text.length<1}  onClick={handleDel} className={`btn btn-${props.mode==="light"?"dark":"primary"} mx-2 my-2`}>Delete your text</button>
<div className="container">
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
  <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read per word</p>
  <h3>Preview</h3>
 <p>{text.length>0?text:"Enter something to be preview"}</p>
</div>
    </div>
    </>
  );
};

export default Textform;
