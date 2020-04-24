import React from 'react';
import style from './Medium.scss';
import { MediumPostPreviewContainer } from './MediumPostPreviewContainer/MediumPostPreviewContainer';

class Medium extends React.Component<{}, {}> {
  render() {
    return (
      <div className={ style.medium }>
        <MediumPostPreviewContainer mediumRssFeed={ 'https://medium.com/feed/@technotronic12' }/>
      </div>
    );
  }
}

export { Medium };
