import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login&Signup/Login"
import SignUp from "./Login&Signup/SignUp"
import Home from "./Login&Signup/Home"
import Navbar from "./Login&Signup/Navbar"
import Electronics from "./Login&Signup/SubComponents/Electronics"
import ItemDetails from "./Login&Signup/SubComponents/ItemDetails"
import Cart from "./Login&Signup/SubComponents/Cart"




function App() {


  return (
    <>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/electronics" element={<Electronics/>} />
                <Route path="/items/:id" element={<ItemDetails />} />
                <Route path="/cart" element={<Cart/>} />
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App








// import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import SellerHome from "./SellerSide/SellerHome"

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<SellerHome/>} />
//             </Routes>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App