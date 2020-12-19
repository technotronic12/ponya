import React from 'react'
import style from './Medium.scss'
import commonStyle from '../../common-styles.scss'
import { MediumPostPreviewContainer } from './MediumPostPreviewContainer/MediumPostPreviewContainer'
import { SectionTitle } from '../SectionTitle/Title'

class Medium extends React.Component<{ elementId: string }, {}> {
	render() {
		return (
			<div id={this.props.elementId} className={`${style.medium} ${commonStyle.section}`}>
				<SectionTitle>Blog posts</SectionTitle>
				<MediumPostPreviewContainer
					mediumRssFeed={'https://medium.com/feed/@technotronic12'}
				/>
			</div>
		)
	}
}

export { Medium }
