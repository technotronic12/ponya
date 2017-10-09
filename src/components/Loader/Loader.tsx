import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './Loader.css';
import { IAction } from 'mobx';

@observer
export class Loader extends React.Component< { isLoaded: IAction }, {}> {
    render() {
        return (
            <div id={style.loaderWrapper} className={this.props.isLoaded ? style.fadeout : ''}>
                <div id={style.loader}/>
            </div>
        )
    }
}