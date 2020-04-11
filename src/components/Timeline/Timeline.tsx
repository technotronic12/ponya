import * as React from 'react';
import * as styles from './Timeline.scss';
import { TimelineItem } from './TimelineItem/TimelineItem';

export class Timeline extends React.Component<{ title: string, items: JSX.Element[] }, {}> {
  render() {
    return (
      <div className={ styles.timeline }>
        <div className={ `${ styles.timelineTextTitle }` }>
          { this.props.title }
        </div>
        <div className={ styles.main }>
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
