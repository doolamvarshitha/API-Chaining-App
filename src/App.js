// src/App.js
import React, { useState } from 'react';
import APISelector from './components/APISelector';
import InputForm from './components/InputForm';
import ChainVisualizer from './components/ChainVisualizer';

const App = () => {
  const [apiChain, setApiChain] = useState([]);
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddAPI = (apiDetails) => {
    setApiChain((prev) => [...prev, apiDetails]);
  };

  const handlePostDataChange = (data) => {
    setPostData(data);
  };

  const executeAPIs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let responseData;
      for (const api of apiChain) {
        if (api.method === 'GET') {
          const res = await fetch(api.url);
          responseData = await res.json();
          // Use responseData as needed for chaining
        } else if (api.method === 'POST') {
          const res = await fetch(api.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...postData, userId: responseData.id }), // Assuming chaining from Get Users
          });
          responseData = await res.json();
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Chaining App</h1>
      <APISelector onAddAPI={handleAddAPI} />
      <InputForm onChange={handlePostDataChange} />
      <ChainVisualizer apiChain={apiChain} />
      <button 
        onClick={executeAPIs}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Execute API Chain
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default App;
