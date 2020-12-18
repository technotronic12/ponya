import React from 'react'
import style from './ResumeItem.scss'
import { IResumeItemData } from '../../../../models/ResumeItemData'

export class ResumeItem extends React.Component<
	{ item: IResumeItemData; right: boolean },
	{}
> {
	// todo: link company name

	render() {
		return (
			<div>
				<p
					className={`${style.years} ${
						this.props.right ? style.right : style.left
					}`}>
					{this.props.item.years}
				</p>
				<p className={style.resumeItemTitle}>
					<span className={style.company}>{this.props.item.title.company}</span>
					<span> | </span>
					<span className={style.role}>{this.props.item.title.role}</span>
					<span> {this.props.item.title.team ? '@' : ''} </span>
					<span>{this.props.item.title.team}</span>
				</p>
				<p>{this.props.item.text}</p>
				{this.props.item.images &&
					this.props.item.images.map((image, index) => (
						<img
							alt='nodejs js typescript scala developer'
							key={index}
							className={style.resumeIcon}
							src={image}
						/>
					))}
			</div>
		)
	}
}
