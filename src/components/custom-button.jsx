import React from "react";

import "../styles/custom-btn.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
