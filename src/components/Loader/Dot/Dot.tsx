import React from 'react'
import style from '../DotLoader.scss'

export class Dot extends React.Component<{ color: String; big: Boolean }, {}> {
  render() {
    return (
      <div className={style.dotContainer}>
        <div
          className={`${style.dot} ${this.props.big ? style.big : ''}`}
          style={{ backgroundColor: this.props.color }}
        />
      </div>
    )
  }
}
