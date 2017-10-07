import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './MenuButton.css'

@observer
export class MenuButton extends React.Component<{ item, onClick }, {}> {

    selectItem() {
        this.props.onClick(this.props.item);
    }

    render() {
        return (
            <div className={style.menuButton} onClick={this.selectItem.bind(this)}>
                { this.props.item.text }
            </div>
        );
    }
}
