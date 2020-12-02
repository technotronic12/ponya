import React from 'react'
import readingTime from 'reading-time'
import style from './MediumPostPreview.scss'
import { IMediumPost } from '../medium-typings'
import {
  formatToReadableDate,
  htmlToText,
  substringTextFromWordUntilEnd,
} from '../../../utils'

class MediumPostPreview extends React.Component<{ post: IMediumPost }, {}> {
  private _getShortPostDescription(post) {
    const cleanPostDescription = post || this._getPostDescription()
    return cleanPostDescription.substring(0, 130) + '...'
  }

  private _getPostDescription() {
    const { post } = this.props
    const postDescriptionText = htmlToText(post.description)
    const postWithoutIntro = substringTextFromWordUntilEnd(
      postDescriptionText,
      'using TDD methodology.',
    )
    return substringTextFromWordUntilEnd(postWithoutIntro, 'Unsplash') // image alt
  }

  render() {
    const { post } = this.props
    const description = this._getPostDescription()
    const readTimeMinutes = Math.ceil(readingTime(description).minutes)
    const shortDescription = this._getShortPostDescription(description)

    return (
      <a className={style.mediumPostPreview} href={post.link} target={'_blank'}>
        <img
          alt={post.title}
          src={post.thumbnail}
          className={style.mediumPostPreviewThumbnail}
        />
        <div className={style.mediumPostPreviewContent}>
          <div
            className={`${style.mediumPostPreviewItem} ${style.mediumPostPreviewTitle}`}>
            {post.title}
          </div>
          <div className={style.mediumPostPreviewDescription}>
            {shortDescription}
          </div>
        </div>
        <div className={style.mediumPostPreviewFooter}>
          <div>{formatToReadableDate(post.pubDate)}</div>
          <div className={style.spaces}>|</div>
          <div>{`${readTimeMinutes} min read`}</div>
          <div className={style.hoverNote}>opens in a new tab</div>
        </div>
      </a>
    )
  }
}

export { MediumPostPreview }
