import React from 'react';
import StaffDisplay from '../components/StaffDisplay';

export default function Profiles({ staff }) {
  console.log(staff);
  return (
    <div>
      <h1>##### Profiles Page #####</h1>

      <h1>Meet our DJs</h1>
      <StaffDisplay staff={staff} />
      <h1>##### Profiles Page #####</h1>
    </div>
  );
}
