import React from 'react';

export default function UnorderedList({ list }) {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
