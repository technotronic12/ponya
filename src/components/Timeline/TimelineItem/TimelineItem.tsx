import React from 'react';
import style from './TimelineItem.scss';

export class TimelineItem extends React.Component<{}, {}> {
  // todo: TimelineItem should render children, Resume should use Timeline which renders resumeItem

  render() {
    return (
      <div className={ style.timelineItem }>
        { this.props.children }
      </div>
    );
  }
}
