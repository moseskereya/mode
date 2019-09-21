import React from 'react';
const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    className="btn3" />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;