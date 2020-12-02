import React from 'react';
import * as styles from './TimelineItem.scss';

export class TimelineItem extends React.Component<{}, {}> {
  render() {
    return (
      <div className={ styles.timelineItem }>
        { this.props.children }
      </div>
    );
  }
}
