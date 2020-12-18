import React from 'react'
import axios from 'axios'
import { MediumPostPreview } from '../MediumPostPreview/MediumPostPreview'
import { IMediumAuthorMetadata, IMediumPost } from '../medium-typings'
import style from './MediumPostPreviewContainer.scss'

class MediumPostPreviewContainer extends React.Component<
	{ mediumRssFeed: string },
	{ posts: IMediumPost[]; metadata: IMediumAuthorMetadata }
> {
	constructor() {
		super()

		this.state = {
			posts: [],
			metadata: undefined,
		}
	}

	componentDidMount(): void {
		const rssFeedJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${this.props.mediumRssFeed}`

		axios
			.get(rssFeedJsonUrl)
			.then((response) =>
				this.setState({
					posts: response.data.items,
					metadata: response.data.feed,
				}),
			)
			.catch((err) => console.log('Error fetching blog RSS json', err))
	}

	render() {
		return (
			<div className={style.mediumPostPreviewContainer}>
				{this.state.posts.map((post, index) => (
					<MediumPostPreview key={index} post={post} />
				))}
			</div>
		)
	}
}

export { MediumPostPreviewContainer }
