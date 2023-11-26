import React, { useState } from 'react';
import './Button.css';

const Buttons = () => {
  const [textButtonClicked, setTextButtonClicked] = useState(false);
  const [warningButtonClicked, setWarningButtonClicked] = useState(false);
  const [showWarningMessage, setShowWarningMessage] = useState(false);
  const [showHintMessage, setShowHintMessage] = useState(false);

  const handleTextButtonClick = () => {
    setTextButtonClicked(!textButtonClicked);
  };

  const handleWarningButtonClick = () => {
    setWarningButtonClicked(true);
    setShowWarningMessage(!showWarningMessage); 
  };

  const handleHintMouseEnter = () => {
    setShowHintMessage(true);
  };

  const handleHintMouseLeave = () => {
    setShowHintMessage(false);
  };

  return (
    <div>
      <button className='button1' onClick={handleTextButtonClick}>Text</button>
      <button className='button2' onClick={handleWarningButtonClick} style={{ backgroundColor: warningButtonClicked ? 'red' : '' }}>
        Warning
      </button>
      <button className='button3' onMouseEnter={handleHintMouseEnter} onMouseLeave={handleHintMouseLeave}>
        Hint
      </button>

      {textButtonClicked && <div className='text'>Hello Teacher</div>}
      {showWarningMessage && <div className='warning'>Warning Message</div>}
      {showHintMessage && <div className='hint'>Hello World</div>}
    </div>
  );
};

export default Buttons;
