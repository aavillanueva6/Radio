import React from 'react';
import Hero from './Hero';

import map from '../assets/images/charlston-map.webp';
import TextSection from './TextSection';

export default function Location({ text }) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <Hero image={map}></Hero>
        </div>
        <div className="col-3 text-start">
          <TextSection text={text} />
        </div>
      </div>
      <p>Location component</p>
    </div>
  );
}
