import React from 'react';
import './BtnAnimated.css';

function BtnAnimated({ text }) {
  return (
    <>
      <a href="#" className="btn-animated" style={{ "--clr": "#f7f0f0" }}>
        <span>{text}</span>
      </a>
    </>
  );
}

export default BtnAnimated;
