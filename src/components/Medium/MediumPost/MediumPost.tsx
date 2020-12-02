import React from 'react'
import { IMediumPost } from '../medium-typings'

class MediumPost extends React.Component<{ postData: IMediumPost }, {}> {
	render() {
		return (
			<div>
				<div>Title</div>
				<div>Date, Reading time, Tags</div>
				<div>Section</div>
				<div>Section</div>
			</div>
		)
	}
}

export { MediumPost }
