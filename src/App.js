import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDom from "react-dom";

var time = new Date();
var curHr = time.getHours();
console.log(curHr);

let TimeDaytxt;
let customStyle = {color: ""};

if(curHr < 12){
  TimeDaytxt = "Good Morning!";
  customStyle = {color: "red"};
  customStyle.color = "red";
}else if(curHr < 18){
  TimeDaytxt = "Good Afternoon!";
  customStyle = {color: "green"};
  customStyle.color = "green";
}else{
  TimeDaytxt = "Good Evening!"
  customStyle.color = "blue";
}

function App() {
  return (
    <div>
      <h1 className = "heading" style = {customStyle}>{TimeDaytxt}</h1>
    
    <div className = "div2">
      <h2 className = "heading2">HTML Global Attributes</h2>
      <h3 className = "heading3">Access Key</h3>
      <a href = "https://www.youtube.com/channel/UC14UlmYlSNiQCBe9Eookf_A" accessKey = "a">
        My Youtube Channel
      </a>
      <span className = "spn1">Press Alt + A</span>
      <br/>
      <a href = "https://www.facebook.com/renzomarko" accessKey = "b">
        My Facebook Profile
      </a>
      <span className = "spn2">Press Alt + B</span>
    </div>
    
    <div className = "div3">
      <h3 className = "heading4" contentEditable = "true">{" "} This Content is Editable</h3>
      <h7 className = "heading4" draggable = "true">This is draggable</h7>
      <h4 className = "heading4" hidden>I'm Code Master and Programmer.</h4>
      <h5 className = "heading4">There's a Hidden Message</h5>
      <h6 className = "heading4" contentEditable = "true" spellCheck = "true">
        This message is editable with spell check, try changing the text.
      </h6>
      <h7 className = "heading4" translate = "yes">Translate is not supported in ms edge</h7>
    </div>
    </div>
  );
}
export default App;
