// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-50 shadow-lg fixed rounded-r-lg">
      <h2 className="text-2xl font-semibold text-green-700 p-4 border-b border-green-200"><Link href="/">HealthCare</Link></h2>
      <ul className="mt-4">
        <li className="hover:bg-green-100 transition duration-200">
          <Link href="/Chat" className="block p-4 text-green-800">Personal Diagnosis</Link>
        </li>
        <li className="hover:bg-green-100 transition duration-200">
          <Link href="/Analyze" className="block p-4 text-green-800">Analyze</Link>
        </li>
        <li className="hover:bg-green-100 transition duration-200">
          <Link href="/SyntheticData" className="block p-4 text-green-800">Synthetic Medical Data</Link>
        </li>
        <li className="hover:bg-green-100 transition duration-200">
          <Link href="/Contact" className="block p-4 text-green-800">Contact Doctors</Link>
        </li>
        <li className="hover:bg-green-100 transition duration-200">
          <Link href="/Library" className="block p-4 text-green-800">Library</Link>
        </li>
        <li className="hover:bg-green-100 transition duration-200">
          <Link href="/About" className="block p-4 text-green-800">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
