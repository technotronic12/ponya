import * as React from 'react';
import { divider } from './Divider.scss';

export class Divider extends React.Component<{}, {}> {
  render() {
    return (<hr className={ divider }/>);
  }
}
