import * as React from 'react';
import * as style from './Hero.css';

export class Hero extends React.Component {
    // TODO: rearrange animations
    render() {
        return (
            <div>
                <img className={style.fullWidthBg} src="../../../assets/spaceOne.jpg"/>
                <div className={[style.centerPosition].join(' ')}>
                    <div className={[style.hello].join(' ')}>Hi, I am Eli. A Fullstack developer.</div>
                    <div>
                        <div className={[style.travel].join(' ')}>
                            Building things, from<span id="typed-strings"> home</span>.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}