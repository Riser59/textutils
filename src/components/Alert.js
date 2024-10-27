import React, { useState } from 'react';

export default function Alert(props) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {setVisible(false);};
  const caps = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    visible && props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex justify-content-between`} role="alert">
        <div>
          <strong>{caps(props.alert.type)}</strong>: {props.alert.msg}
        </div>
        <button type="button" className="close" aria-label="Close" onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
}
