import React from 'react'
import style from './MenuItem.scss'

export class MenuItem extends React.Component<{ icon: string, elementId?: string }, {}> {
	render() {
		return (
			<a href={this.props.elementId} className={`${style.icon}`}>
				<img
					alt={'Eli Ponyatovski Fullstack Developer menu item'}
					src={this.props.icon}
				/>
			</a>
		)
	}
}
