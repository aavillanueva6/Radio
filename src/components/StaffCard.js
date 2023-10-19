import React from 'react';

export default function StaffCard(props) {
  const cardStyle = {
    // width: '18rem',
  };

  return (
    <div className="col-4" key={props.uuid}>
      <div className="card text-primary" style={cardStyle}>
        <img className="card-img-top" src={props.image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.bio}</p>
          <p className="card-text">{props.show}</p>
        </div>
      </div>
    </div>
  );
}
