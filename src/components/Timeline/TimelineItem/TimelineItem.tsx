import * as React from 'react';
import * as styles from './TimelineItem.scss';

export class TimelineItem extends React.Component<{ years: string, title: string, text: string }, {}> {

  render() {
    return (
      <div className={ styles.timelineItem }>
        <p className={ styles.years }>{ this.props.years }</p>
        <p className={ styles.timelineItemTitle }>{ this.props.title }</p>
        <p>{ this.props.text }</p>
      </div>
    );
  }
}
