import React from 'react';
import style from './Timeline.scss';
import commonStyle from '../../common-styles.scss';
import { TimelineItem } from './TimelineItem/TimelineItem';
import { SectionTitle } from '../SectionTitle/Title';

export class Timeline extends React.Component<{ title: string, items: JSX.Element[] }, {}> {
  render() {
    return (
      <div className={ `${ style.timeline } ${ commonStyle.section }` }>
        <SectionTitle>{ this.props.title }</SectionTitle>
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
