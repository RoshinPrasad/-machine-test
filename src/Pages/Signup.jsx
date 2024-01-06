import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import cookies from 'js-cookie'

function Signup() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };  

  const submitchange = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      cookies.set('userDetails', JSON.stringify({ email, password }));
      setFormData({ email: "", password: "" });
      alert("success");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
   

  };


  return (
    <div className="m-8 max-w-sm sm:max-w-sm mx-auto border py-9 rounded-lg border-black bg-slate-50">
      <h1 className="text-slate-900 text-3xl uppercase text-center m-4 font-bold ">
        Signup
      </h1>
      <form className="flex flex-col gap-4 mt-16 m-5" onSubmit={submitchange}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={handlechange}
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handlechange}
          className="border p-3 rounded-lg"
        />
        <button className=" lg:max-w-sm max-w-lg border font-extrabold py-1 mt-7 uppercase bg-slate-400 rounded-lg hover:bg-slate-500">
          
          submit
        </button>
      </form>
      <div className="m-5 flex gap-1">
        <h3>Already a user ? </h3>
        <Link to={"/login"} className="text-blue-600 uppercase">
          Login Here
        </Link>
      </div>
    </div>
  );
}

export default Signup;
