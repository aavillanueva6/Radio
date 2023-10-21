import React from 'react';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Overview from '../components/Overview';

import homeHeroImg from '../assets/images/Bex-Taylor-horiz-homeFooter.jpg';

export default function Home() {
  return (
    <div>
      <h1>##### Home Page #####</h1>
      <Location />
      <Overview />
      <Hero image={homeHeroImg} />
      <h1>##### Home Page #####</h1>
    </div>
  );
}
