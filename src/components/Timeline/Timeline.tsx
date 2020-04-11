import * as React from 'react';
import * as styles from './Timeline.scss';
import { TimelineItem } from './TimelineItem/TimelineItem';
import { resumeItems } from '../Resume/ResumeData';
import { ResumeItem } from '../Resume/ResumeItem/ResumeItem';


export class Timeline extends React.Component<{ title: string }, {}> {
  render() {
    return (
      <div className={ styles.timeline }>
        <div className={ `${ styles.timelineTextTitle }` }>
          { this.props.title }
        </div>
        <div className={ styles.main }>
          {
            resumeItems.map((item, index) =>
              <TimelineItem key={ index }>
                <ResumeItem item={ item } right={ index % 2 === 0 }/>
              </TimelineItem>)
          }
        </div>
      </div>
    );
  }
}
