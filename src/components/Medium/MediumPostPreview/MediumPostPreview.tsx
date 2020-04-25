import React from 'react';
import style from './MediumPostPreview.scss';
import { IMediumPost } from '../medium-typings';
import { htmlToText, substringTextFromWordUntilEnd } from '../../../utils';

class MediumPostPreview extends React.Component<{ post: IMediumPost }, {}> {

  private _getPostDescription() {
    const { post } = this.props;

    const postDescriptionText = htmlToText(post.description);
    const postWithoutIntro = substringTextFromWordUntilEnd(postDescriptionText, 'using TDD methodology.');
    const cleanPostDescription = substringTextFromWordUntilEnd(postWithoutIntro, 'Unsplash');
    return cleanPostDescription.substring(0, 400) + '...';
  }

  render() {
    const { post } = this.props;

    return (
      <div className={ style.mediumPostPreview }>
        <img alt={ post.title } src={ post.thumbnail } className={ style.mediumPostPreviewThumbnail }/>
        <div className={ style.mediumPostPreviewContent }>
          <div className={ `${ style.mediumPostPreviewItem } ${ style.mediumPostPreviewTitle }` }>{ post.title }</div>
          <div className={ style.mediumPostPreviewDescription }>{ this._getPostDescription() }</div>
        </div>
        <div className={ style.mediumPostPreviewFooter }>
          <div>{ new Date(post.pubDate).toDateString() }</div>
          <div>Read time</div>
        </div>
      </div>
    );
  }
}

export { MediumPostPreview };
