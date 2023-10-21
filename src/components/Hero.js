import React from 'react';

export default function Hero({ image }) {
  return (
    <div>
      <img className="container-fluid" src={image} />
    </div>
  );
}
