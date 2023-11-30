import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [confirmPassword, setConfirmpassword] = useState("");
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
      setAlertMessage('Please fill all details first');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
      return;
    }
    const payload={
      name,
      email,
      password,
      confirmPassword
    }
    setAlertMessage('New User Registered!');
    // Clear the alert after 3 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  }
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
        {alertMessage && (
        <div role="alert" className="mt-4">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Alert
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{alertMessage}</p>
          </div>
        </div>
      )}
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              placeholder="bhairav gotam"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="bhairav@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
