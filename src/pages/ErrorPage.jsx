import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/media/e0dd7699b4044fb3b140fbe83529e5f7.png"
        alt="Error 404"
        className="w-80 md:w-96 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-900">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-3">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
