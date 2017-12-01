import * as React from 'react';
import * as style from './About.scss';

export class About extends React.Component {
  // TODO: rearrange animations
  render() {
    return (
      <div className={`${style.white}`}>
        <div className={`${style.aboutText}`}>
          Yo
        </div>
      </div>
    )
  }
}