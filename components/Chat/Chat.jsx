'use client';
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chat = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const generateAnswer = async () => {
    const genAI = new GoogleGenerativeAI('AIzaSyDWOWtKYRSj4FLjW9Wk6Dj0I61z_5-R7wM');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a highly knowledgeable medical doctor. Based on the following patient description, provide a thorough analysis, including potential diagnoses, symptoms, and treatment recommendations. Limit your response to medical-related content only, and avoid asking any questions. Patient Description: ${input} Please provide your analysis.`;

    // try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text())
      setAnswer(result.response.text());
    //   setInput(''); // Clear input field
    // } catch (error) {
    //   console.error('Error generating response:', error);
    //   setAnswer('Please Tell me Only Queries Related to Diseases');
    // }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white shadow-lg rounded-lg">
      <div className="flex-1 overflow-y-auto mb-4">
        {/* Display AI response */}
        {answer && (
          <div className="my-2 p-2 rounded-lg bg-gray-100" dangerouslySetInnerHTML={{ __html: answer }} />
        )}
        {/* Display user message */}
        {input && (
          <div className="my-2 p-2 rounded-lg bg-green-100 self-end">
            <h1>Analysing</h1>
          </div>
        )}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-1 p-2 border rounded-l-lg border-gray-300"
          placeholder="Type your query..."
        />
        <button 
          className="bg-green-500 text-white p-2 rounded-r-lg" 
          onClick={generateAnswer}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
