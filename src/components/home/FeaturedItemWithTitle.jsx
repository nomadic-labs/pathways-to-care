import React from "react";

import {
  EditableText,
  EditableParagraph,
  EditableImageUpload,
} from 'react-easy-editables';

const FeaturedItem = props => {
  const onSavePassthrough = id => editedContent => {
    const content = { ...props.content, [id]: editedContent }
    props.onSave(content);
  };

  const content = props.content || {};

  return (
    <div className={props.classes}>
      <div className="featured-desc">
        <h3><EditableText content={content["featured-item-title"]} onSave={onSavePassthrough("featured-item-title")} /></h3>
        <EditableText content={content["featured-item-description"]} onSave={onSavePassthrough("featured-item-description")} />
      </div>
    </div>
  );
};

export default FeaturedItem;