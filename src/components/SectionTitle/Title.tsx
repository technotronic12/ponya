import React from 'react'
import style from './SectionTitle.scss'

class SectionTitle extends React.Component<{}, {}> {
	render() {
		return <div className={style.sectionTitle}>{this.props.children}</div>
	}
}

export { SectionTitle }
