import React, { useState } from 'react';

const NestedButtons = () => {
  const [feedback, setFeedback] = useState('');

  // Outer button click handler
  const handleOuterClick = () => {
    setFeedback('Outer Button Clicked!');
    console.log('Outer Button Clicked!');
  };

  // Inner button click handler (stopping event propagation)
  const handleInnerClick = (e) => {
    e.stopPropagation();  // Prevent the outer button handler from being triggered
    setFeedback('Inner Button Clicked!');
    console.log('Inner Button Clicked!');
  };

  return (
    <div>
      <button onClick={handleOuterClick} style = {{fontSize:'30px', padding:'20px', margin: '10px', fontFamily:"'Libre Baskerville', serif"}}>
        Outer Button
        <button onClick={handleInnerClick} style = {{fontSize:'25px', padding:'15px', margin:'8px', fontFamily:"'Libre Baskerville', serif"}}>
          Inner Button
        </button>
      </button>
      <p>{feedback}</p>
    </div>
  );
};

export default NestedButtons;
