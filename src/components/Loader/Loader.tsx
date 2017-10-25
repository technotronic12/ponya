import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './Loader.css';

@observer
export class Loader extends React.Component< { isLoaded: () => Boolean }, {}> {
    render() {
        return (
            <div id={style.wrapper} className={this.props.isLoaded ? style.fadeout : ''}>
                <div id={style.loader}/>
            </div>
        )
    }
}