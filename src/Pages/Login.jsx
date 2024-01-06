import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import cookies from 'js-cookie'

function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
         ...formData,
    [e.target.id]:e.target.value,
  })
  };

  console.log(formData)
   
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { email, password } = formData;

      const storedUserDetails = JSON.parse(cookies.get("userDetails"));
      console.log(storedUserDetails) 
      if (storedUserDetails && storedUserDetails.email === email && storedUserDetails.password === password) {
  
        setFormData({ email: "", password: "" });
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert(error);
    }
  };



  return (
    <div className="max-w-xs sm:max-w-s mx-auto py-9 border border-black m-9 rounded-lg bg-slate-50">
      <h1 className="text-center font-extrabold uppercase m-3 text-3xl">
        Login
      </h1>
      <form className="flex flex-col gap-4 m-4 mt-16" >
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        ></input>
        <button className="py-1 rounded-lg bg-blue-400 hover:bg-blue-500 mt-6" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="flex gap-1 m-4">
        <h3>Not Signed yet ?</h3>
        <Link to={"/"} className="uppercase text-blue-500">
          Signup here
        </Link>
      </div>
    </div>
  );
}

export default Login;
