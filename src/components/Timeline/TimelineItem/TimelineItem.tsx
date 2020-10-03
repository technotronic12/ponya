import React from 'react';
// import {timelineItem} from './TimelineItem.scss';
import * as styles from './TimelineItem.scss';

export class TimelineItem extends React.Component<{}, {}> {
  // todo: TimelineItem should render children, Resume should use Timeline which renders resumeItem

  render() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>', styles, styles.timelineItem);

    return (
      <div className={ styles.timelineItem }>
        { this.props.children }
      </div>
    );
  }
}
