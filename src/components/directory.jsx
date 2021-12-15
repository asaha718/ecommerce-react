import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from "../redux/directory/directory.selector";
import MenuItem from "./menu-item";
import "../styles/directory.scss";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mSTP = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mSTP)(Directory);
