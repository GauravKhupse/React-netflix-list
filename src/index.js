import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Card";
import sData from "./Sdata";

ReactDOM.render( <>
<h1 className ="card__header">List of five best Video</h1>
  {sData.map((val) => {
    return(
      <Card
  imgsrc = {val.imgsrc}
  title ={val.title}
  sname ={val.sname}
  link = {val.link}
/>
    );

  })}
  </>, document.getElementById('root'));