import * as React from 'react';
import * as styles from './ResumeItem.scss';
import { IResumeItemData } from '../../../models/ResumeItemData';

export class ResumeItem extends React.Component<{ item: IResumeItemData, right: boolean }, {}> {

  render() {
    return (
      <div>
        <p className={ `${ styles.years } ${ this.props.right ? styles.right : styles.left }` }>{ this.props.item.years }</p>
        <p className={ styles.resumeItemTitle }>
          <span className={ styles.company }>{ this.props.item.title.company }</span>
          <span> | </span>
          <span className={ styles.role }>{ this.props.item.title.role }</span>
          <span> { this.props.item.title.team ? '@' : '' } </span>
          <span>{ this.props.item.title.team }</span>
        </p>
        <p>{ this.props.item.text }</p>
        { this.props.item.images && this.props.item.images.map((image, index) =>
          <img alt="nodejs js typescript scala developer" key={ index } className={ styles.resumeIcon } src={ image }/>) }
      </div>
    );
  }
}
