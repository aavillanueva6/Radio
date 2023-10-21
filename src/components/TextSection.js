import React from 'react';

export default function TextSection({ text }) {
  return (
    <div className="container-fluid">
      {text.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
