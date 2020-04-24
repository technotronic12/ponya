import React from 'react';

class MediumPost extends React.Component<{ postData: any }, {}> {
  render() {
    return (
      <div>
        <div>Title</div>
        <div>Date, Reading time, Tags</div>
        <div>Section</div>
        <div>Section</div>
      </div>
    );
  }
}

export { MediumPost };
