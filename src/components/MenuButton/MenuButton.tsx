import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export class MenuButton extends React.Component<{ value: String }, {}> {
    render() {
        return (
            <div className="menu-button">
                { this.props.value }
            </div>
        );
    }
}
