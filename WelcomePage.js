import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function WelcomePage({ userEmail }) {
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <h1>Welcome</h1>
        Hello, Welcome!<br />
        {/* Display user's email if available */}
        {userEmail && <p>Email: {userEmail}</p>}
      </div>
      <div className="d-grid gap-2">
        {/* Add any button or action you want here */}
        {/* For example, a "Login" link */}
        <Link to="/login">Login</Link>  
      </div>
    </>
  );
}

export default WelcomePage;