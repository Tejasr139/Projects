import React from "react";
import "./home.css"
import mobiles from "./Mobiles.jpg"
import grocery from "./Grocery.jpg"
import fashion from "./Fashion.jpg"
import elect from "./electronics.jpg"
import furniture from "./Furniture.jpg"
import appliances from "./Appliances.jpg"
import travel from "./Travel.jpg"
import toys from "./Toys.jpg"
import twowheeler from "./TwoWheeler.jpg"
import { Link } from "react-router-dom";

const Home = () => {


    return(
        <>
            <div className="HomeContainer">
                <div className="grocery">
                    <div>
                        <img src={grocery} alt="Grocery" /><br></br>
                        <span> Grocery </span>
                    </div>
                        

                    <div>
                        <img src={mobiles} alt="Mobiles" className="mobiles"/><br></br>
                        <span> Mobiles </span>
                    </div>

                    <div>
                        <img src={fashion} alt="fashion" className="fashion" /><br></br>
                        <span> Fashion </span>
                    </div>

                    <Link to ={'/electronics'}>
                    <div>
                        <img src={elect} alt="Electronics" className="electronics" /><br></br>
                        <span> Electronics </span>
                    </div>
                    </Link>
                    

                    <div>
                        <img src={furniture} alt="furniture" className="furniture" /><br></br>
                        <span> Furniture </span>
                    </div>

                    <div>
                        <img src={appliances} alt="appliances" className="appliances" /><br></br>
                        <span> Appliances </span>
                    </div>

                    <div>
                        <img src={travel} alt="travel" className="travel" /><br></br>
                        <span> Travel </span>
                    </div>

                    <div>
                        <img src={toys} alt="toys" className="toys" /><br></br>
                        <span> Toys </span>
                    </div>

                    <div>
                        <img src={twowheeler} alt="twowheeler" className="twowheeler" /><br></br>
                        <span> Twowheeler </span>
                    </div>
                </div>
            </div>


            <div className="carouselcontainer">
                
                {/*------------- carousel------------------------------ */}
                    <div >
                        <div >
                            <img src="carousel1" alt="Image" />
                        </div>
                        <div >
                            <img src="carousel2" alt="Image 2" />
                        </div>
                        <div >
                            <img src="carousel3" alt="Image 3" />
                        </div>
    
                    </div>
                
            </div>

            <div className="ProductsContainer">
                <span> Best Of Electronics </span>

                <div></div>

            </div>

                
           



        </>
       
        
    )

}

export default Home;