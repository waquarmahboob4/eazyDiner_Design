import React from "react";
import "./index.css";
import axisImg from "../assets/gallery_img1.jpg";

export default function AdditionalOffers({data}) {
  return (
    
      
      
          <div className="card">
            
            <div className="card-container">
                <div className="booking">
                    <a href='#1'  className="sidebarItems">Table Bookings</a><br/>
                    <a href='#1'  className="sidebarItems">Online Orders</a><br/>
                    <a href='#1'  className="sidebarItems">Coupons Purchased</a>
                    
    

                </div>
                
                    
                <hr/>
                <div className="payment">
                <a href='#1'  className="sidebarTitle">Payments</a><br/>
                    <a href='#1'  className="sidebarItems active">PayEazy Transaction</a>

                </div>
                <hr/>
                <div className="eazyRewards">
                <a href='#1'  className="sidebarItems sidebarTitle">Eazy Rewards</a><br/>
                    <a href='#1'  className="sidebarItems">Refer & Earn</a><br/>
                    <a href='#1'  className="sidebarItems">EazyPoints Summary</a><br/>
                    <a href='#1'  className="sidebarItems">My Rewards</a><br/>
                    <a href='#1'  className="sidebarItems">Giftcard</a>


                </div>
                <hr/>
                <div className="myDetails">
                <a href='#1'  className="sidebarItems sidebarTitle">My-Details</a><br/>
                    <a href='#1'  className="sidebarItems">Manage Addresses</a><br/>
                    <a href='#1'  className="sidebarItems">My Favourites</a><br/>
                    <a href='#1'  className="sidebarItems">Review and Ratings</a><br/>
                    <a href='#1'  className="sidebarItems">Uploaded Photos</a>

                </div>
                <hr/>
                <div className="logout">
                <a href='#1'  className="sidebarItems">Logout</a>

                </div>


              
            </div>
        </div>

    
  );
}
