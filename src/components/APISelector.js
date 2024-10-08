// src/components/APISelector.js
import React, { useState } from 'react';

const APIs = [
  { method: 'GET', url: 'https://jsonplaceholder.typicode.com/users', label: 'Get Users' },
  { method: 'POST', url: 'https://jsonplaceholder.typicode.com/posts', label: 'Create Post' },
  { method: 'GET', url: 'https://jsonplaceholder.typicode.com/comments?postId=', label: 'Get Comments' },
];

const APISelector = ({ onAddAPI }) => {
  const [selectedAPI, setSelectedAPI] = useState(APIs[0]);

  const handleAdd = () => {
    onAddAPI(selectedAPI);
    setSelectedAPI(APIs[0]); // Reset selection
  };

  return (
    <div>
      <select
        value={selectedAPI.label}
        onChange={(e) => setSelectedAPI(APIs.find(api => api.label === e.target.value))}
        className="border p-2"
      >
        {APIs.map((api) => (
          <option key={api.label} value={api.label}>{api.label}</option>
        ))}
      </select>
      <button onClick={handleAdd} className="ml-2 bg-green-500 text-white p-2 rounded">
        Add API
      </button>
    </div>
  );
};

export default APISelector;
