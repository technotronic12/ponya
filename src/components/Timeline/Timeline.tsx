import React from 'react';
import style from './Timeline.scss';
import { TimelineItem } from './TimelineItem/TimelineItem';

export class Timeline extends React.Component<{ title: string, items: JSX.Element[] }, {}> {
  render() {
    return (
      <div className={ style.timeline }>
        <div className={ `${ style.timelineTextTitle }` }>
          { this.props.title }
        </div>
        <div className={ style.main }>
          {
            this.props.items.map((item, index) =>
              <TimelineItem key={ index }>
                { item }
              </TimelineItem>)
          }
        </div>
      </div>
    );
  }
}
