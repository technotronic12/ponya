import * as React from 'react';
import * as styles from './TimelineItem.scss';
import { ResumeItemTitle } from '../TimelineData';

export class TimelineItem extends React.Component<{ years: string, title: ResumeItemTitle, text: string }, {}> {

  render() {
    return (
      <div className={ styles.timelineItem }>
        <p className={ styles.years }>{ this.props.years }</p>
        <p className={ styles.timelineItemTitle }>
          <span className={ styles.company }>{ this.props.title.company }</span>
          <span> | </span>
          <span className={ styles.role }>{ this.props.title.role }</span>
          <span> @ </span>
          <span>{ this.props.title.team }</span>
        </p>
        <p>{ this.props.text }</p>
      </div>
    );
  }
}
