import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">MyWebsite</h1>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
          <Link to="/register" className="hover:text-blue-400 transition">Register</Link>
        </nav>

        {/* Button */}
        <button className="md:hidden text-white">☰</button>
      </div>
    </header>
  );
};

export default Header;
