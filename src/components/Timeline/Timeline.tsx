import * as React from 'react';
import * as styles from './Timeline.scss';
import { TimelineItem } from './TimelineItem/TimelineItem';
import { resumeItems } from './TimelineData';

export class Timeline extends React.Component<{ title: string }, {}> {
  render() {
    return (
      <div className={ styles.timeline }>
        <div className={ `${ styles.timelineTextTitle }` }>
          { this.props.title }
        </div>
        <div className={ styles.main }>
          { resumeItems.map(item => <TimelineItem years={ item.years } title={ item.title } text={ item.text }/>) }
        </div>
      </div>
    );
  }
}
