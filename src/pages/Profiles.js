import React from 'react';
import StaffDisplay from '../components/StaffDisplay';

export default function Profiles({ staff }) {
  console.log(staff);
  return (
    <div className="helloThereKenobi">
      <h1>Meet our DJs</h1>
      <StaffDisplay staff={staff} />
    </div>
  );
}
