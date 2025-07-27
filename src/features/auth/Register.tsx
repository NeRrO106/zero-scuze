import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.username ||
      !form.password ||
      !form.email ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    localStorage.setItem("token", "abc123");
    alert("Logged in successfully!");
    navigator("/home");
  };

  return (
    <div className="pl-64 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4 flex-col">
      {error && <p className="text-black-500">{error}</p>}
      <form
        className="max-w-md w-full bg-transparent p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black md-5text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg text-center">
          Register
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Please enter your credentials to register.
        </p>
        <div>
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Email:
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Password:
          </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Confirm Password:
          </label>
          <input
            type="password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-green-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md px-6 py-2 shadow-lg dark:focus:ring-blue-800 transition-all duration-300 focus:outline-none"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center gap-4 mt-6 flex-row">
        <button
          type="button"
          onClick={() => console.log("Login cu Facebook")}
          className="p-2 rounded-full hover:bg-white/20 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="h-7 w-7 fill-current text-white"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => console.log("Login cu Google")}
          className="p-2 rounded-full hover:bg-white/20 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            className="h-7 w-7 fill-current text-white"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Register;
