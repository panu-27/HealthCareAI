'use client';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center rounded-md">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center p-10 bg-green-100 rounded-b-lg shadow-lg w-full">
        <h1 className="text-5xl font-bold text-green-800 mb-4">Welcome to Our AI Healthcare Model</h1>
        <p className="text-xl text-green-700 text-center max-w-2xl mb-6">
          Transforming healthcare with advanced AI insights and personalized solutions for better health decisions.
        </p>
        <Link href="/Analyze" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-12 px-6 max-w-4xl">
        <h2 className="text-4xl font-semibold text-green-700 text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Personalized Insights</h3>
            <p className="text-green-600">
              Receive tailored recommendations based on your unique health profile.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Data Analysis</h3>
            <p className="text-green-600">
              Quickly analyze complex medical data to gain valuable insights.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Continuous Learning</h3>
            <p className="text-green-600">
              Our AI improves over time, ensuring you always have access to the latest medical knowledge.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Interactive Chatbot</h3>
            <p className="text-green-600">
              Get instant answers to your queries through our user-friendly chatbot interface.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-green-100 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-4xl font-semibold text-green-700 text-center mb-6">About Our AI Module</h2>
        <p className="text-lg text-green-600 text-center max-w-2xl mx-auto mb-6">
          Our AI module is designed to empower you with knowledge and insights, making healthcare more accessible and effective.
        </p>
        <Link href="/About" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
          Learn More
        </Link>
      </section>

      {/* Call to Action Section */}
      <footer className="py-8">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Empower Your Health Journey Today!</h2>
        <Link href="/Contact" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
          Contact Doctors
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;
