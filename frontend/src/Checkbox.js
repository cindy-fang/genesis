import React, { useState } from 'react';

function Checkbox({ defaultChecked, onChange }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <>
      <style>{`
        .custom-checkbox {
          width: 20px;
          height: 20px;
          border: 1px solid #ccc;
          border-radius: 3px;
          display: inline-block;
          cursor: pointer;
          position: relative;
          margin-right: 8px; /* Add space between checkbox and label */

        }

        .custom-checkbox.checked::before {
          content: '🥕'; /* Display carrot emoji when checked */
          font-size: 16px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .custom-checkbox.checked {
          background-color: #d2f5d8; /* Change background color when checked */
        }
      `}</style>
      <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`} onClick={handleClick}>
        {/* Display carrot emoji */}
      </div>
    </>
  );
}

export default Checkbox;
