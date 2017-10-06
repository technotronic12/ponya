import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './MenuButton.css'

@observer
export class MenuButton extends React.Component<{ value: String }, {}> {
    render() {
        return (
            <div className={style.menuButton}>
                { this.props.value }
            </div>
        );
    }
}
