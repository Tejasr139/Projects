// ItemDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:5100/api/Electronics/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }


  const handleAddToCart = async () => {
    try {
      const cartItem = {
        cartId: 0,
        cartItems: [
          {
            cartItemId: 0,
            cartId: 0,  
            electronicId: item.id,
            quantity: 1,
            electronic: {
              electronicId: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
            },
          },
        ],
      };
      await fetch('http://localhost:5100/api/Cart2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem),
      });
      alert('Item added to cart');
      navigate('/cart');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='itemcard'>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      {/* render other details here */}
      {/* <button onClick={() => history.goBack()}>Back</button> */}
      <button className='cart' onClick={handleAddToCart}>Add to Cart</button> 
      
      <button className='buy'> Buy </button>
    </div>
  );
};

export default ItemDetails;



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './ItemDetails.css';

// const ItemDetails = () => {
//   console.log('ItemDetails component rendered');

//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await fetch(`http://localhost:5100/api/Electronics/${id}`);
//         const data = await response.json();
//         console.log('Received item data:', data);
//         setItem(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchItem();
//   }, [id]);

//   if (!item) {
//     return <p>Loading...</p>;
//   }

//   console.log('Item data:', item);

//   const handleAddToCart = async () => {
//     try {
//       const cartItem = {
//         cartId: 2,
//         cartItems: [
//           {
//             electronicId: item.id,
//             quantity: 1,
//             electronic: {
//               electronicId: item.id,
//               name: item.name,
//               description: item.description,
//               price: item.price,
//             },
//           },
//         ],
//       };
//       await fetch('http://localhost:5100/api/Cart2', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(cartItem),
//       });
//       navigate('/cart');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='itemcard'>
//       <h1>{item.name}</h1>
//       <p>{item.description}</p>
//       <p>Price: ₹{item.price}</p>
//       {/* render other details here */}
//       {/* <button onClick={() => history.goBack()}>Back</button> */}
//       <button className='cart' onClick={handleAddToCart}>Add to Cart</button> 
      
//       <button className='buy'> Buy </button>
//     </div>
//   );
// };

// export default ItemDetails;