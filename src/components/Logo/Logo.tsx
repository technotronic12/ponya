import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <div className="logo-top-text">Ponya.space</div>
                <div className="logo-bottom-text">Something</div>
            </div>
        );
    }
}