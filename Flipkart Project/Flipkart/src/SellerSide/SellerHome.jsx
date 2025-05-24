import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './sellerhome.css';

const SellerHome = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    // add more fields as needed
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5100/api/Electronics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setItems([...items, data]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  }

  return (
    <div className="seller-home-container">
      <h1 className="title">Seller Home</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" />
        </label>
        <label>
          Description:
          <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={handleDescriptionChange}
            className="quill-editor"
          />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="input-field" />
        </label>
        {/* add more fields as needed */}
        <button type="submit" className="submit-button">Upload</button>
      </form>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SellerHome;