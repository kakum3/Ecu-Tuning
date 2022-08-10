import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Servicelist from "../component/servicelist";
import "../../styles/details.css";

export const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contain-fluid">
    
    <div className="row">
      <div className="col-sm-12 col-lg-5 bg-dark">
      <h2 className="logo"><span>Taller</span> <span>Paco</span></h2>
        <Servicelist />
        
        <Servicelist />

      </div>
      <div className="col-sm-12 col-lg-7">
       
            <div className="content">

<h1 className="logo">Contact <span>Us</span></h1>

<div className="contact-wrapper animated bounceInUp">
    <div className="contact-form">
        <h3>Contact us</h3>
        <form action="">
            <p>
                <label>FullName</label>
                <input type="text" name="fullname"/>
            </p>
            <p>
                <label>Email Adress</label>
                <input type="email" name="email"/>
            </p>
            <p>
                <label>Phone Number</label>
                <input type="tel" name="phone"/>
            </p>
            <p>
                <label>Affair</label>
                <input type="text" name="affair"/>
            </p>
            <p className="block">
               <label>Message</label> 
                <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
                <button>
                    Send
                </button>
            </p>
        </form>
    </div>
    <div className="contact-info">
        <h4>TALLER PACO</h4>
        <ul>
            <li><i className="fas fa-map-marker-alt"></i> Baker Street</li>
            <li><i className="fas fa-phone"></i> (111) 111 111 111</li>
            <li><i className="fas fa-envelope-open-text"></i> contact@website.com</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
        <p>Company.com</p>
    </div>
</div>
</div>
</div>

      </div>
    </div>
    
  );
};
