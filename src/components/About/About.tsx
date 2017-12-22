import * as React from 'react';
import * as style from './About.scss';

export class About extends React.Component {
  render() {
    return (
      <div className={`${style.about}`}>
        <div className={`${style.container}`}>
          <div className={`${style.aboutTextTitle}`}>
            About me
          </div>
          <div className={`${style.aboutText}`}>
            <p>I love the good life, I love having fun. And no, I don't like building software more than having fun.</p>
            <p>But don't get me wrong, as I wrote above, I enjoy writing software.</p>
            <br/>
            <p>While many other professions are productive and creative,
              most of them don't have this one specific thing.</p>
            <p className={style.purple}>Making something out of nothing.</p>
            <br/>
            <p>I love seeing software get trough all of its lifecycle stages, from idea to production.</p>
          </div>
        </div>
      </div>
    )
  }
}