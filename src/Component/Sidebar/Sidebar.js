import React from "react";
import "./index.css";
import axisImg from "../assets/gallery_img1.jpg";

export default function AdditionalOffers({data}) {
  return (
    <div>
      
      
          <div className="card">
            
            <div className="card-container">
                <div className="booking">
                    <span>Table Bookings</span><br/>
                    <span>Online Orders</span><br/>
                    <span>Coupons Purchased</span>
                    
                    

                </div>
                
                    
                <hr/>
                <div className="payment">
                <span>Payments</span><br/>
                    <span>PayEazy Transaction</span>

                </div>
                <hr/>
                <div className="eazyRewards">
                <span>Eazy Rewards</span><br/>
                    <span>Refer & Earn</span><br/>
                    <span>EazyPoints Summary</span><br/>
                    <span>My Rewards</span><br/>
                    <span>Giftcard</span>


                </div>
                <hr/>
                <div className="details">
                <span>My-Details</span><br/>
                    <span>Manage Addresses</span><br/>
                    <span>My Favourites</span><br/>
                    <span>Review and Ratings</span><br/>
                    <span>Uploaded Photos</span>

                </div>
                <hr/>
                <div className="logout">
                <span>Logout</span>

                </div>


              
            </div>
        </div>

    </div>
  );
}
