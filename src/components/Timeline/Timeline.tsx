import * as React from 'react';
import * as styles from './Timeline.scss';

export class Timeline extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.timeline}>
        <div className={`${styles.timelineTextTitle}`}>
          Experience
        </div>
        <div className={styles.main}>
          <div className={styles.p}>
            <p className={styles.years}>2018-2019</p>
            <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
          </div>
          <div className={styles.p}>
            <p className={styles.years}>2018-2019</p>
            <p>Shoober shooberino adorable doggo many pats, heckin good boys many pats pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow very biscit.</p>
          </div>
          <div className={styles.p}>
            <p className={styles.years}>2015-2016</p>
            <p>Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for pats big ol, he made many woofs doing me a frighten puggo wow very biscit, ruff fat boi ruff long doggo. </p>
          </div>
          <div className={styles.p}>
            <p className={styles.years}>2015-2016</p>
            <p>Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats snoot. I am bekom fat ur givin me a spook length boy wow very biscit very good spot.</p>
          </div>
          <div className={styles.p}>
            <p className={styles.years}>2015-2016</p>
            <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
          </div>
        </div>
      </div>);
  }
}
