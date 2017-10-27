import * as React from 'react';
import * as style from './Hero.css';
import { TypedGreeting } from '../TypedGreeting/TypedGreeting';

export class Hero extends React.Component {
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