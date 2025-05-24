import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const location = useLocation();
  const { state } = location;
  const { userData, credentials} = state || {};


  const handleLogin = () => {
    if (credentials && credentials.email === Email && credentials.password === password) {
      console.log("Login successful!");
      navigate('/home', {  state: { userData: location.state.userData } });
    } else {
      console.log("Invalid credentials!");
    }
  };

  return (
    <div>
      <h1> Login </h1>
      <span>Enter Email: </span>
      <input
        type="text"
        placeholder="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <span>Enter Password : </span>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}> Login </button>
      <Link to="/signup"><button>SignUp</button></Link>
    </div>
  );
};

export default Login;















// import React from "react"
// import Login from "./Project/Login&Signup/Login"
// import SignUp from "./Project/Login&Signup/SignUp"
// import Home from "./Project/Login&Signup/Home"
// import { BrowserRouter, Route, Routes } from "react-router-dom"


// function App() {


//   return (
//     <>
//       <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Login/>} />
//                 <Route path="/signup" element={<SignUp/>} />
//                 <Route path="/home" element={<Home/>} />
//             </Routes>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App
