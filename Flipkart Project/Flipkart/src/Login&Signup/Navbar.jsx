import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'
import flipkartLogo from './FlipKartLogo.jpg';



const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo-search-container">
                <div className="logo">
                    <img src={flipkartLogo} alt="Logo" />
                </div>

                <div className="search-form">
                  <div className="search-input-container">
                  <input type="search" placeholder="Search"/>

                  <div className="dropdown">
                    <Link to="/login">
                      <button className="dropdown-toggle">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="-dOa_b L_FVxe" width="24" height="24"/>
                        <span> Login </span> 
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" className="-dOa_b XdYXbi" width="12" height="12"></img>
                      </button>
                    </Link>
        
                    <ul className="dropdown-menu">
                      <li><a href="#">New Customer?</a> <button>SignUp</button></li>
                      <li><a href="#">My Profile</a></li>
                      <li><a href="#">Flipkart Plus Zone</a></li>
                      <li><a href="#">Orders</a></li>
                      <li><a href="#">WhishList</a></li>
                      <li><a href="#">Rewards</a></li>
                      <li><a href="#">GiftCards</a></li>
                    </ul>
                  </div>

                  <div className="cart">
                    <Link to="/cart">

                    <button>
                      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" className="_1XmrCc" width="24" height="24" />
                      <span> Cart </span>
                    </button>

                    </Link>
                  </div>
      
                  <div className="bcselr">
                    <button>
                      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="_1XmrCc" />
                      <span> Become a Seller </span>
                    </button>
                  </div>


                  <div className="dropdown">
                    <button className="dropdown-toggle">
                      <span>
                      <img className="-dOa_b" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" 
                            width="24" 
                            height="24" 
                            alt="Dropdown with more help links" />
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="#"><img className="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="Notification Preferences" width="24" height="24" /> Notification Preferences</a></li>
                      <li><a href="#"><img className="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" alt="24x7 Customer Care" width="24" height="24"/> 24x7 Customer Care </a></li>
                      <li><a href="#"><img className="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" alt="Advertise" width="24" height="24"/> Advertise </a></li>
                      <li><a href="#"><img className="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" alt="Download App" width="24" height="24"/> Download App </a></li>
                    </ul>
                  </div>

                </div>
            </div>
          </div>
        </nav>
    )

}

export default Navbar;