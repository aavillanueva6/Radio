import React from 'react';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Overview from '../components/Overview';

import homeHeroImg from '../assets/images/Bex-Taylor-horiz-homeFooter.jpg';
import locationText from '../assets/data/locationText';

export default function Home() {
  return (
    <div>
      <h1>##### Home Page #####</h1>
      <Location text={locationText} />
      <Overview />
      <Hero image={homeHeroImg} />
      <h1>##### Home Page #####</h1>
    </div>
  );
}
