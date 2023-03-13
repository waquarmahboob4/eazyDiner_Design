import React from "react";
import "./index.css";
import axisImg from "../assets/gallery_img1.jpg";

export default function PayeazyTransaction({data}) {
  return (
    <div className="row">
      <h1 style={{ flex: "100%" }}>Payeazy Transaction</h1>
      {
        data.map((element,index)=>(
          <div key={index} className="card left">
            <div className="img">
              <img src={element.image} alt="axis" />
            </div>
            <div className="card-container">
              <h4>
                <b>{element.name}</b>
              </h4>
              <p className="word">
                {element.content}
              </p>
            </div>
          </div>


        ))
      }

      {Array(10)
        .fill()
        .map((element, i) => (
          <div key={i} className="card left">
            <div className="img">
              <img src={axisImg} alt="axis" />
            </div>
            <div className="card-container">
              <h4>
                <b>Axis Bank</b>
              </h4>
              <p>
                Flat 25% off* at INOX on Movie tickets and 
                Food & Beverages
                Master Card of Axis Bank
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
