import React from 'react';
import * as styles from './Resume.scss';
import { Timeline } from '../Timeline/Timeline';
import { ResumeItem } from './ResumeItem/ResumeItem';
import { IResumeItemData, resumeItemsData } from '../../models/ResumeItemData';

export class Resume extends React.Component<{}, {}> {

  resumeItemsToDomElements(resumeDataItems: IResumeItemData[]) {
    return resumeDataItems.map((item, index) => <ResumeItem item={ item } right={ index % 2 === 0 }/>);
  }

  render() {
    const resumeItems = this.resumeItemsToDomElements(resumeItemsData);

    return (
      <div className={ styles.resume }>
        <Timeline title={ 'Experience' } items={ resumeItems }/>
      </div>
    );
  }
}
