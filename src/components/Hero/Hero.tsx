import React from 'react'
import style from './Hero.scss'
import { TypedGreeting } from '../TypedGreeting/TypedGreeting'

export class Hero extends React.Component<{}, {}> {
  render() {
    return (
      <div className={`${style.hero} ${style.background}`}>
        <div className={style.greeting}>
          <TypedGreeting />
        </div>
      </div>
    )
  }
}
