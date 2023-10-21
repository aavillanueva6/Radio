import React from 'react';
import Hero from './Hero';
import TextSection from './TextSection';

import imageEliud from '../assets/images/Eliud-Villanueva.webp';
import overviewCaptionText from '../assets/data/overviewCaptionText';
import overviewHeaderText from '../assets/data/overviewHeaderText';
import overviewJazzTypeList1 from '../assets/data/overviewJazzTypeList1';
import overviewJazzTypeList2 from '../assets/data/overviewJazzTypeList2';
import overviewJazzDiscussion from '../assets/data/overviewJazzDiscussion';
import UnorderedList from './UnorderedList';

export default function Overview() {
  return (
    <div className="container">
      <div className="row">ABOUT WETF 105.7</div>
      <div className="row justify-content-center align-items-center">
        <div className="col-3">
          <Hero image={imageEliud}></Hero>
          <div className="text-end">
            <a className="container-fluid">OUR RADIO HOSTS</a>
            <TextSection text={overviewCaptionText} />
          </div>
        </div>
        <div className="col-6 text-start">
          <div className="row">
            <TextSection text={overviewHeaderText} />
          </div>
          <div className="row">
            <div className="col-6">
              <UnorderedList list={overviewJazzTypeList1} />
            </div>
            <div className="col-6">
              <UnorderedList list={overviewJazzTypeList2} />
            </div>
          </div>
          <div className="row">
            <TextSection text={overviewJazzDiscussion} />
          </div>
        </div>
      </div>
    </div>
  );
}
