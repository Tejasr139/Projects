import { useEffect, useState } from "react";
import React from "react";
import './electronics.css'
import { Link } from 'react-router-dom';
import ItemDetails from './ItemDetails';

const Electronics = () => {
    const [electronics, setElectronics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const getAllData = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5100/api/Electronics");
            const data = await response.json();
            setElectronics(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:5100/api/Electronics/${id}`);
            const data = await response.json();
            setSelectedItem(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleAddToCart = async (electronic) => {
        try {
            const cartItem = {
                electronicId: electronic.electronicId,
                quantity: 1 // Adjust the quantity as needed
            };
            console.log("Requesting to add cart item:", cartItem);
            
            const response = await fetch("http://localhost:5100/api/Cart", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Server responded with:", errorData);
                if (errorData.errors) {
                    console.error("Validation errors:", errorData.errors);
                }
                throw new Error(errorData.title || "Failed to add item to cart");
            }

            alert("Item added to cart!");
        } catch (error) {
            console.error("Error:", error.message);
            alert("Failed to add item to cart. Please try again.");
        }
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <>
            <h1><center>Electronics</center></h1>
            <br></br> <br></br>

            {loading ? (<p className="loading-message">Loading...</p>) : (
                <>
                    <div className="items-container">
                        {electronics.map((electronic) => (
                            <div className="items" key={electronic.electronicId}>
                                <li>
                                    {electronic.name} <br></br> 
                                    From ₹{electronic.price} <br></br>
                                    {electronic.description}


                                    <div className="cartanddetails">
                                    <button onClick={() => handleAddToCart(electronic)}>Add to Cart</button>
                                    <Link to={`/items/${electronic.electronicId}`}>
                                        <button>View Details</button>
                                    </Link>

                                    </div>
                                    
                                </li>
                            </div>
                        ))}
                    </div>
                    {selectedItem && <ItemDetails item={selectedItem} />}
                </>
            )}  
            {error && <p>Error: {error}</p>}
        </>
    )
}

export default Electronics;
