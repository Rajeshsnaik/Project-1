import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';


const Register = () => {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[phone,setPhone] = useState('');
  const[address,setAddress] = useState('');
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //validation before submitting
  const validateForm = () =>{
    if(!name || !email || !password || !phone || !address){
      alert("All fields are required");
      return false;
    }

    //email regex
    if(!/\S+@\S+\.\S+/.test(email)){
      alert("Invalid email format");
      return false;
    }

    if(password.length < 6){
      alert("Password must be at least 6 characters");
      return false;
    }

    if(!/^\d{10}$/.test(phone)){
      alert("Phone number must be 10 digits");
      return false;
    }

    return true;
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!validateForm()) return;

    try {
        setLoading(true);

        const res = await axios.post("/api/v1/auth/register",{
            name,
            email,
            password,
            phone,
            address
        });

        if(res?.data?.success){
            toast.success(res.data.message || "Registered Successfully");
            navigate('/login');
        }else{
            toast.error(res.data.message || "Registration Failed");
        }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");

        
    }
    finally{
        setLoading(false);
    }
  }

  return (
    <Layout>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Phone Number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  </div>
  </Layout>
);

}

export default Register
