import React from 'react';

import TextSection from '../components/TextSection';

import historyText from '../assets/data/history';

export default function History() {
  return (
    <div>
      <h1>##### History Page #####</h1>

      <img
        className="container-fluid"
        src={'https://picsum.photos/3000/1000/?blur=10'}
        alt="WETF Photo"
      />
      <h1>WETF-LP History</h1>
      <TextSection histString={historyText} />
      <h1>##### History Page #####</h1>
    </div>
  );
}
