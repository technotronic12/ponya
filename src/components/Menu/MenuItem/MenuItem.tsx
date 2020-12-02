import React from 'react'
import style from './MenuItem.scss'

export class MenuItem extends React.Component<{ icon: string }, {}> {
	render() {
		return (
			<img
				alt={'Eli Ponyatovski Fullstack Developer menu item'}
				src={this.props.icon}
				className={`${style.icon}`}
			/>
		)
	}
}
