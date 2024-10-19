// components/SyntheticData.js
import React from 'react';

const syntheticData = [
  { id: 1, patientName: 'Pranav', diagnosis: 'Hypertension', date: '2024-10-01' },
  { id: 2, patientName: 'Om', diagnosis: 'Diabetes', date: '2024-10-02' },
  { id: 3, patientName: 'Siddhesh', diagnosis: 'Asthma', date: '2024-10-03' },
  { id: 4, patientName: 'Rohan', diagnosis: 'Anxiety', date: '2024-10-04' },
];

const SyntheticData = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-green-700 mb-2">Synthetic Medical Data</h2>
      <p className="text-sm text-gray-600 mb-4">*This is demo data for illustration purposes only.</p>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-green-200">
            <th className="py-2 px-4 border-b text-left text-green-800">Patient Name</th>
            <th className="py-2 px-4 border-b text-left text-green-800">Diagnosis</th>
            <th className="py-2 px-4 border-b text-left text-green-800">Date</th>
          </tr>
        </thead>
        <tbody>
          {syntheticData.map((entry) => (
            <tr key={entry.id} className="hover:bg-green-100 transition duration-200">
              <td className="py-2 px-4 border-b text-green-800">{entry.patientName}</td>
              <td className="py-2 px-4 border-b text-green-800">{entry.diagnosis}</td>
              <td className="py-2 px-4 border-b text-green-800">{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyntheticData;

