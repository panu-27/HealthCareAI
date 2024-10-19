// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [userLocation, setUserLocation] = useState("Pune");
    const [nearestHospitals, setNearestHospitals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchNearestHospitals = async (location) => {
        const apiKey = 'AIzaSyDMGBGqSq7-hxIzI3eXM_J9Ud7Ao4RJtL'; // Your Gemini API key
        const url = 'https://api.gemini.com/v1/ask'; // Adjust this to the correct endpoint for your API

        const prompt = `Act as a medical assistant. Please provide a list of hospitals near ${location} in a table format, with each hospital's name on a separate line.`;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Log the API response for debugging
            console.log('API Response:', data);

            // Extract the hospital names from the response
            const hospitalNames = data.text.split('\n').filter(name => name); // Adjust based on actual response structure

            if (hospitalNames.length > 0) {
                setNearestHospitals(hospitalNames.map((name, index) => ({
                    id: index + 1,
                    name: name.trim()
                })));
            } else {
                setError('No hospitals found.');
            }
        } catch (err) {
            setError('Error fetching hospitals: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchNearestHospitals(userLocation);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-md">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Contact Hospitals</h2>
            <p className="text-sm text-gray-600 mb-4">*This feature is still in progress.</p>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-green-700">Enter Location:</h3>
                <textarea
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    placeholder="Enter a city or location (e.g., Pune)"
                    className="border border-green-300 rounded-md p-2 w-full"
                    rows="3"
                />
                <button 
                    onClick={handleSearch}
                    className={`mt-2 px-4 py-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'} text-white rounded-md hover:bg-green-600 transition`}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Find Nearest Hospitals'}
                </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <h3 className="text-lg font-semibold text-green-700 mb-2">Nearest Hospitals:</h3>
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-green-200">
                        <th className="py-2 px-4 border-b text-left text-green-800">Hospital Name</th>
                    </tr>
                </thead>
                <tbody>
                    {nearestHospitals.length > 0 ? (
                        nearestHospitals.map((hospital) => (
                            <tr key={hospital.id} className="hover:bg-green-100 transition duration-200">
                                <td className="py-2 px-4 border-b text-green-800">{hospital.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="1" className="py-2 px-4 border-b text-green-800 text-center">No hospitals found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Contact;
