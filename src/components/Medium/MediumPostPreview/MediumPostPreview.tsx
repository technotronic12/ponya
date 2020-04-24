import React from 'react';
import { MediumPost } from '../medium-typings';

class MediumPostPreview extends React.Component<{ post: MediumPost }, {}> {
  render() {
    return (
      <div>
        <div>Image</div>
        <div>Title</div>
        <div>Preview</div>
        <div>Date</div>
        <div>Read time</div>
      </div>
    );
  }
}

export { MediumPostPreview };
