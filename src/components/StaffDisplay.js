import React from 'react';
import StaffCard from './StaffCard';

export default function StaffDisplay({ staff }) {
  return (
    <div className="container">
      <div className="row gy-3 justify-content-around">
        {staff.map((dj) => (
          <StaffCard
            bio={dj.bio}
            show={dj.show}
            name={`${dj.name.first} ${dj.name.last}`}
            image={dj.image}
            key={dj.uuid}
          ></StaffCard>
        ))}
      </div>
    </div>
  );
}
