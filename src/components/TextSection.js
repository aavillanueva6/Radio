import React from 'react';

export default function TextSection({ histString }) {
  console.log(histString);
  return (
    <div>
      <h1>WETF-LP History</h1>
      <p>{histString}</p>
    </div>
  );
}
