import React from 'react';
import style from './MediumPostPreview.scss';
import { IMediumPost } from '../medium-typings';

class MediumPostPreview extends React.Component<{ post: IMediumPost }, {}> {
  render() {
    const { post } = this.props;
    const toText = node => {
      const tag = document.createElement('div');
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    };


    const shortenFromWord = (text: string, word: string) => {
      const indexOfWord = text.indexOf(word);
      return indexOfWord > -1 ?
        text.substring(indexOfWord + word.length) :
        text;
    };

    return (
      <div className={ style.mediumPostPreview }>
        <img alt={ post.title } src={ post.thumbnail } className={ style.mediumPostPreviewThumbnail }/>
        <div className={ style.mediumPostPreviewContent }>
          <div className={ `${ style.mediumPostPreviewItem } ${ style.mediumPostPreviewTitle }` }>{ post.title }</div>
          <div className={ style.mediumPostPreviewDescription }>{ shortenFromWord(shortenFromWord(toText(post.description), 'using TDD methodology.').trim().substring(0, 400), 'Unsplash') + '...' }</div>
        </div>
        <div className={ style.mediumPostPreviewFooter }>
          <div>Date</div>
          <div>Read time</div>
        </div>
      </div>
    );
  }
}

export { MediumPostPreview };
