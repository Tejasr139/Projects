import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const[Fname, setFname] = useState("");
    const[Lname, setLname] = useState("");
    const[Email, setEmail] = useState("");
    const[Password, setPassword] = useState("");
    const[ConfirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();


    const handleFname = (event)=>{
        setFname(event.target.value);
    };

    const handleLname = (event)=>{
        setLname(event.target.value);
    };

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    };

    const handlePassword = (event)=>{
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    };


    const handleSignUp = () => {
        // // for validating the email and password while login.
    //    const credentials = {email : Email , password : Password };
    //    navigate('/', { state: { credentials } });

        const userData = {
            fname: Fname,
            lname: Lname,
            email: Email,
            password: Password,
        };

        const credentials = {
            email: Email,
            password: Password,
        };

        navigate('/',{ state: { userData, credentials } })
        //navigate('/home', { state: { userData } });
    }



    return (
        <div>
            <h1>Sign up</h1>
            <span> FirstName :</span>
            <input type="text" placeholder="Enter firstname" value={Fname} onChange={handleFname}></input> <br></br> <br></br>
            <span> LastName :</span>
            <input type="text" placeholder="Enter lastname" value={Lname} onChange={handleLname}></input> <br></br> <br></br>
            <span> Email :</span>
            <input type="text" placeholder="Enter email" value={Email} onChange={handleEmail}></input> <br></br> <br></br>
            <span> Password :</span>
            <input type="password" placeholder="Enter password" value={Password} onChange={handlePassword}></input> <br></br> <br></br>
            <span>Confirm Password :</span>
            <input type="password" placeholder="Enter password" value={ConfirmPassword} onChange={handleConfirmPassword}></input> <br></br> <br></br>
            <button onClick={handleSignUp}> Sign up </button>
        </div>
    )
}

export default SignUp;