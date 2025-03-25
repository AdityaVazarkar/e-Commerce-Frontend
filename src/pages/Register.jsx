import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userInfo.name, userInfo.email, userInfo.password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Register</button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
