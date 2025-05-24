// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// import './sellerhome.css';

// const SellerHome = () => {
//   const [items, setItems] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: 0,
//     // add more fields as needed
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5100/api/Electronics", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });
//       const data = await response.json();
//       setItems([...items, data]);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   }

//   const handleDescriptionChange = (value) => {
//     setFormData({ ...formData, description: value });
//   }

//   return (
//     <div className="seller-home-container">
//       <h1 className="title">Seller Home</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" />
//         </label>
//         <label>
//           Description:
//           <ReactQuill
//             theme="snow"
//             value={formData.description}
//             onChange={handleDescriptionChange}
//             className="quill-editor"
//           />
//         </label>
//         <label>
//           Price:
//           <input type="number" name="price" value={formData.price} onChange={handleChange} className="input-field" />
//         </label>
//         {/* add more fields as needed */}
//         <button type="submit" className="submit-button">Upload</button>
//       </form>
//       <ul className="item-list">
//         {items.map((item, index) => (
//           <li key={index} className="item">
//             {item.name} - {item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SellerHome;




import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './sellerhome.css';

const SellerHome = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const quillRef = useRef(null);

  useEffect(() => {
    // Add any necessary setup here

    // Add a MutationObserver to handle DOM changes
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Handle mutations
        }
      }
    });

    const quillContainer = quillRef.current?.getEditor().root;

    if (quillContainer) {
      observer.observe(quillContainer, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleImageUpload = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        [{ 'align': [] }],
        ['clean']
      ],
      handlers: {
        'image': async () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();
          input.onchange = async () => {
            const file = input.files[0];
            if (file) {
              try {
                const imageUrl = await handleImageUpload(file);
                const editor = quillRef.current.getEditor();
                const range = editor.getSelection(true); // Ensure the range is defined
                editor.insertEmbed(range.index, 'image', imageUrl);
              } catch (error) {
                console.error("Image upload failed:", error);
              }
            }
          };
        }
      }
    }
  };

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
            ref={quillRef}
            theme="snow"
            value={formData.description}
            onChange={handleDescriptionChange}
            modules={modules}
            className="quill-editor"
          />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="input-field" />
        </label>
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
  );
};

export default SellerHome;
