// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const [cart, setCart] = useState({ cartId: 0, cartItems: [] });
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch('http://localhost:5100/api/Cart2');
//         const data = await response.json();
//         setCart(data);
//         if (data.cartItems) {
//             calculateTotal(data.cartItems);
//           }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCart();
//   }, []);

//   const calculateTotal = (cartItems) => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.price;
//     });
//     setTotal(total);
//   };

//   const addItemToCart = async (item) => {
//     try {
//       const response = await fetch('http://localhost:5100/api/Cart2', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(item),
//       });
//       const data = await response.json();
//       setCart({ ...cart, cartItems: [...cart.cartItems, data] });
//       calculateTotal([...cart.cartItems, data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   const removeItemFromCart = async (itemId) => {
//     try {
//       const response = await fetch(`http://localhost:5100/api/Cart2/${itemId}`, {
//         method: 'DELETE',
//       });
//       const data = await response.json();
//       setCart({ ...cart, cartItems: cart.cartItems.filter((item) => item.id !== itemId) });
//       calculateTotal(cart.cartItems.filter((item) => item.id !== itemId));
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   return (
//     <div className="cart-container">
//       <h1>Cart</h1>
//       <ul>
//   {cart.cartItems && cart.cartItems.map((cartItem) => (
//     <li key={cartItem.cartItemId}>
//       <span>{cartItem.electronic.name}</span>
//       <span>₹{cartItem.electronic.price}</span>
//       <span>Quantity: {cartItem.quantity}</span>
//       <button onClick={() => removeItemFromCart(cartItem.cartItemId)}>Remove</button>
//     </li>
//   ))}
// </ul>
//       <p>Total: ₹{total}</p>
//       <Link to="/checkout">
//         <button>Checkout</button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const [cart, setCart] = useState({ cartId: 0, cartItems: [] });
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await fetch('http://localhost:5100/api/Cart2');
//         const data = await response.json();
//         console.log('Received cart data:', data);
//         setCart(data);
//         if (data.cartItems) {
//           calculateTotal(data.cartItems);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCart();
//   }, []);

//   const calculateTotal = (cartItems) => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.price;
//     });
//     setTotal(total);
//   };

// //   const addItemToCart = async (item) => {
// //     try {
// //       const response = await fetch('http://localhost:5100/api/Cart2', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(item),
// //       });
// //       const data = await response.json();
// //       setCart({ ...cart, cartItems: [...cart.cartItems, data] });
// //       calculateTotal([...cart.cartItems, data]);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

//   const removeItemFromCart = async (itemId) => {
//     try {
//       const response = await fetch(`http://localhost:5100/api/Cart2/${itemId}`, {
//         method: 'DELETE',
//       });
//       const data = await response.json();
//       setCart({ ...cart, cartItems: cart.cartItems.filter((item) => item.id !== itemId) });
//       calculateTotal(cart.cartItems.filter((item) => item.id !== itemId));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   console.log('Cart state:', cart);
//   console.log('Cart items:', cart.cartItems);

//   return (
//     <div className="cart-container">
//       <h1>Cart</h1>
//       <ul>
//   {cart.cartItems && cart.cartItems.map((cartItem) => (
//     <li key={cartItem.cartItemId}>
//       <span>{cartItem.electronic.name}</span>
//       <span>₹{cartItem.electronic.price}</span>
//       <span>Quantity: {cartItem.quantity}</span>
//       <button onClick={() => removeItemFromCart(cartItem.cartItemId)}>Remove</button>
//     </li>
//   ))}
// </ul>
//       <p>Total: ₹{total}</p>
//       <Link to="/checkout">
//         <button>Checkout</button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;



// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';

// // const Cart = () => {
// //   const [cart, setCart] = useState([]);
// //   const [total, setTotal] = useState(0);

// //   useEffect(() => {
// //     const fetchCart = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5100/api/Cart2');
// //         const data = await response.json();
// //         setCart(data);
// //         calculateTotal(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     fetchCart();
// //   }, []);

// //   const calculateTotal = (cartItems) => {
// //     let total = 0;
// //     cartItems.forEach((cartItem) => {
// //       if (cartItem.electronic) {
// //         total += cartItem.electronic.price * cartItem.quantity;
// //       }
// //     });
// //     setTotal(total);
// //   };

// //   return (
// //     <div className="cart-container">
// //       <h1>Cart</h1>
// //       <ul>
// //         {cart.map((cartItem) => {
// //           if (cartItem.electronic) {
// //             return (
// //               <li key={cartItem.cartItemId}>
// //                 <span>{cartItem.electronic.name}</span>
// //                 <span>₹{cartItem.electronic.price}</span>
// //                 <span>Quantity: {cartItem.quantity}</span>
// //                 <button onClick={() => removeItemFromCart(cartItem.cartItemId)}>Remove</button>
// //               </li>
// //             );
// //           } else {
// //             return null;
// //           }
// //         })}
// //       </ul>
// //       <p>Total: ₹{total}</p>
// //       <Link to="/checkout">
// //         <button>Checkout</button>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default Cart;






import React, { useEffect, useState } from "react";
//import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCartItems = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5100/api/Cart");
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await fetch(`http://localhost:5100/api/Cart/${id}`, { method: 'DELETE' });
            setCartItems(cartItems.filter(item => item.cartItemId !== id));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <>
            <h1><center>Cart</center></h1>
            <br /><br />

            {loading ? (<p>Loading...</p>) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.cartItemId}>
                                <li>
                                    {item.electronic.name} <br />
                                    Quantity: {item.quantity} <br />
                                    Price: ₹{item.electronic.price} <br />
                                    Total: ₹{item.quantity * item.electronic.price}
                                    <button onClick={() => handleDeleteItem(item.cartItemId)}>Remove</button>
                                </li>
                            </div>
                        ))}
                    </ul>
                </>
            )}
            {error && <p>Error: {error}</p>}
        </>
    );
}

export default Cart;
