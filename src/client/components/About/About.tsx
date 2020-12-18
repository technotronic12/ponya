import React from 'react'
import style from './About.scss'
import commonStyle from '../../common-styles.scss'
import profilePicture from '../../../../assets/oizo.jpg'
import { SectionTitle } from '../SectionTitle/Title'

export class About extends React.Component<{}, {}> {
	render() {
		return (
			<div className={`${style.about}  ${commonStyle.section}`}>
				<div className={`${style.container}`}>
					<SectionTitle>About me </SectionTitle>
					<div className={`${style.aboutText}`}>
						<div className={style.right}>
							<img src={profilePicture} className={style.profile} alt={'yo'} />
						</div>
						<div className={style.left}>
							<p>
								A Tel Aviv based fullstack developer. A husband and a father. A
								cat lover.
							</p>
							<p>
								Parenting and software developing by day, gaming and hacking by
								night.
							</p>
							<br />
							<p>
								An Information system engineer from Ben-Gurion University.
								Enthusiastic about clean code, design patterns, web
								architectures and the DevOps culture.
							</p>
							<br />
							<p>
								Skilled with Javascript in all environments, both client and
								server.
							</p>
							<p>
								Currently building tools that are used by millions of users.
							</p>
							<br />
							<p>Don't be shy to say "Hi!"</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
