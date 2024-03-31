import React from 'react';

function Checkbox({ checked, onChange }) {
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
        }

        .custom-checkbox.checked::before {
          content: '🥕'; /* Display checkmark emoji when checked */
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
      <div className={`custom-checkbox ${checked ? 'checked' : ''}`} onClick={onChange}>
        {/* Display carrot emoji */}
      </div>
    </>
  );
}

export default Checkbox;
