'use client';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-green-100 min-h-screen rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-green-800 mb-4">About Our AI Module</h1>
      <p className="text-lg text-green-700 mb-6 max-w-2xl text-center">
        Our advanced AI module is designed to revolutionize the way you interact with healthcare data. By leveraging cutting-edge algorithms, our system offers personalized insights and recommendations that empower you to make informed health decisions.
      </p>
      
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Benefits of Our AI Module</h2>
      <ul className="list-disc list-inside text-green-600 mb-6 max-w-2xl">
        <li className="mb-2">🚀 **Personalized Insights**: Receive tailored recommendations based on your unique health profile.</li>
        <li className="mb-2">🔍 **Data Analysis**: Quickly analyze complex medical data to gain valuable insights.</li>
        <li className="mb-2">🤖 **Continuous Learning**: Our AI improves over time, ensuring you always have access to the latest medical knowledge.</li>
        <li className="mb-2">💬 **Interactive Chatbot**: Get instant answers to your queries through our user-friendly chatbot interface.</li>
      </ul>
      
      <h2 className="text-3xl font-semibold text-green-700 mb-4">About Our Library</h2>
      <p className="text-lg text-green-700 mb-6 max-w-2xl text-center">
        Our comprehensive library offers a wealth of information on medical conditions, treatments, and best practices. Designed to be a reliable resource, our library ensures you have access to accurate and up-to-date information whenever you need it.
      </p>
      
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Key Features of Our Library</h2>
      <ul className="list-disc list-inside text-green-600 mb-6 max-w-2xl">
        <li className="mb-2">📚 **Extensive Database**: Explore a wide range of topics covering various health-related subjects.</li>
        <li className="mb-2">🔗 **Trusted Sources**: All information is sourced from reputable medical institutions and research.</li>
        <li className="mb-2">🆘 **User-Friendly Interface**: Easily navigate through the library to find the information you need.</li>
      </ul>

      <p className="text-lg text-green-700 max-w-2xl text-center">
        Together, our AI module and library provide a powerful toolset for navigating your health journey. Empower yourself with knowledge and insights for a healthier tomorrow!
      </p>
    </div>
  );
};

export default About;
