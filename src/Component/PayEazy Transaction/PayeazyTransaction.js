import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./index.css";
import axisImg from "../assets/gallery_img1.jpg";

export default function PayeazyTransaction() {
  return (
    <div className="row">
      <Sidebar />
      <div className="transactionDetails">
        <div className="detailCard-container">
          <div className="detailBox">
            <div className="details">
              <div className="detailImg">
                <img src={axisImg} alt="axis" />
              </div>
              <div className="detailText">
                <div id="detailTitle">
                  Axis Bank
                 </div>
                  <div className="transactionLocation">
                    The Leela Ambience, Gurgaon
                  </div>
                  <div className="transactionTime">
                    Paid On Mar 06,2023 at 06:25 PM
                  </div>
              </div>
            </div>
            <div className="status">
              <img
                src="https://thumbs.dreamstime.com/b/success-grunge-vintage-stamp-isolated-white-background-success-sign-success-stamp-122353526.jpg"
                alt="success"
              />
            </div>
          </div>
          <div className="billAmount">
            <span id="amount">Bill Amount ₹ 8000</span>
            <span id="viewDetails">View Details</span>
          </div>
        </div>

        {Array(4)
          .fill()
          .map((elem, key) => (
            <div className="detailCard-container">
          <div className="detailBox">
            <div className="details">
              <div className="detailImg">
                <img src={axisImg} alt="axis" />
              </div>
              <div className="detailText">
                <div id="detailTitle">
                  Axis Bank
                 </div>
                  <div className="transactionLocation">
                    The Leela Ambience, Gurgaon
                  </div>
                  <div className="transactionTime">
                    Paid On Mar 06,2023 at 06:25 PM
                  </div>
              </div>
            </div>
            <div className="status">
              <img
                src="https://thumbs.dreamstime.com/b/success-grunge-vintage-stamp-isolated-white-background-success-sign-success-stamp-122353526.jpg"
                alt="success"
              />
            </div>
          </div>
          <div className="billAmount">
            <span id="amount">Bill Amount ₹ 8000</span>
            <span id="viewDetails">View Details</span>
          </div>
        </div>
          ))}
      </div>
    </div>
  );
}
