import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../redux/shop/shop.selector";
import PreviewCollection from "./preview-collection";
import "../styles/collections-overview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mSTP = (state) =>
  createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mSTP)(CollectionsOverview);
