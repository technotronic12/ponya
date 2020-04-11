import * as React from 'react';
import * as styles from './ResumeItem.scss';
import { IResumeItem } from '../ResumeData';

export class ResumeItem extends React.Component<{ item: IResumeItem, right: boolean }, {}> {

  render() {
    return (
      <div>
        <p className={ `${ styles.years } ${ this.props.right ? styles.right : styles.left }` }>{ this.props.item.years }</p>
        <p className={ styles.resumeItemTitle }>
          <span className={ styles.company }>{ this.props.item.title.company }</span>
          <span> | </span>
          <span className={ styles.role }>{ this.props.item.title.role }</span>
          <span> @ </span>
          <span>{ this.props.item.title.team }</span>
        </p>
        <p>{ this.props.item.text }</p>
        { this.props.item.images && this.props.item.images.map((image, index) =>
          <img key={ index } className={ styles.resumeIcon } src={ image }/>) }
      </div>
    );
  }
}
