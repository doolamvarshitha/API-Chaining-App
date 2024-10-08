// src/components/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onChange }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mr-2"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Set Data
      </button>
    </form>
  );
};

export default InputForm;
