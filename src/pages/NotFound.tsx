import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">Oops! Page not found.</p>
      <Link to={"/"}>
        <button className="rounded-full bg-green-400 px-4 py-2 text-white mt-8">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
