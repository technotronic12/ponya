import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './Logo.css';

@observer
export class Logo extends React.Component {
    render() {
        return (
            <div className={style.logo}>
                <div className={style.logoTopText}>PONYA.SPACE</div>
                {/*<div className={style.logoBottomText}>SOMETHING</div>*/}
            </div>
        );
    }
}