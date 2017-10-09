import * as React from 'react';
import * as style from './Hero.css';

export class Hero extends React.Component {
    // TODO: rearrange animations
    render() {
        return (
            <div>
                <img className={style.fullWidthBg} src="../../../assets/space.jpg"/>
                <div className={[style.centerPosition, style.slidein].join(' ')}>
                    <div className={[style.hello, style.fadein].join(' ')}>Hi, I am Eli. A Fullstack developer.</div>
                    <div>
                        <div className={[style.travel, style.fadein].join(' ')}>
                            Building things, from
                            <span className={style.strike}> space</span><span id="typed-strings"> home</span>.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}