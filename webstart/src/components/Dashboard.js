import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-3xl font-bold mb-6">Welcome to WebStart</header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Recent Projects</h3>
          <p className="text-gray-600">No recent projects. <Link to="/create" className="text-blue-600">Start a new one!</Link></p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Explore Templates</h3>
          <p className="text-gray-600">Browse our collection of pre-made templates.</p>
          <Link to="/templates" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded">View Templates</Link>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Your Account</h3>
          <p className="text-gray-600">Manage your account settings and preferences.</p>
          <Link to="/account" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded">Go to Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
