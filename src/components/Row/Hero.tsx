import * as React from 'react';
import * as style from './Hero.css';

export class Hero extends React.Component {
    render() {
        return (
          <div>
              <div className={`${style.hero} ${style.background}`}>
                  <div className={[style.greeting].join(' ')}>
                      <div className={[style.greetingText].join(' ')}>Hi, I am Eli. A Fullstack developer.</div>
                      <div className={[style.travel].join(' ')}>
                          Building things, from<span id="typed-strings"> home</span>.
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}