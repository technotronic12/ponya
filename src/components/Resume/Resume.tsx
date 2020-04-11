import * as React from 'react';
import * as styles from './Resume.scss';
import { Timeline } from '../Timeline/Timeline';
import { IResumeDataItem, resumeDataItems } from './ResumeData';
import { ResumeItem } from './ResumeItem/ResumeItem';

export class Resume extends React.Component<{}, {}> {

  resumeItemsToDomElements(resumeDataItems: IResumeDataItem[]) {
    return resumeDataItems.map((item, index) => <ResumeItem item={ item } right={ index % 2 === 0 }/>);
  }

  render() {
    const resumeItems = this.resumeItemsToDomElements(resumeDataItems);

    return (
      <div className={ styles.resume }>
        <Timeline title={ 'Experience' } items={ resumeItems }/>
      </div>
    );
  }
}
