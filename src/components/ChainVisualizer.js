// src/components/ChainVisualizer.js
import React from 'react';

const ChainVisualizer = ({ apiChain }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">API Chain:</h2>
      <ul className="list-disc pl-5">
        {apiChain.map((api, index) => (
          <li key={index}>{api.method} - {api.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChainVisualizer;
