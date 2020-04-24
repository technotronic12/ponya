import React from 'react';
import style from './MediumPostPreview.scss';
import { IMediumPost } from '../medium-typings';

class MediumPostPreview extends React.Component<{ post: IMediumPost }, {}> {
  render() {
    const { post } = this.props;

    return (
      <div className={ style.mediumPostPreview }>
        <img alt={ post.title } src={ post.thumbnail } className={ style.mediumPostPreviewThumbnail }/>
        <div className={ `${ style.mediumPostPreviewItem } ${ style.mediumPostPreviewTitle }` }>{ post.title }</div>
        <div>Preview</div>
        <div>Date</div>
        <div>Read time</div>
      </div>
    );
  }
}

export { MediumPostPreview };
