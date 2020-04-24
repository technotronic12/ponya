import React from 'react';
import styles from './TimelineItem.scss';

export class TimelineItem extends React.Component<{}, {}> {
  // todo: TimelineItem should render children, Resume should use Timeline which renders resumeItem

  render() {
    return (
      <div className={ styles.timelineItem }>
        { this.props.children }
      </div>
    );
  }
}
