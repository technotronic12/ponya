import * as React from 'react';
import * as style from './Hero.css';
import Typist from 'react-typist';

export class Hero extends React.Component {
    render() {
        const initialDelayInMs = 1000;
        const delayInMs = 700;
        const sentences = [
            'node developer.',
            'Javascript developer.',
            'React developer.',
            'Scala developer.'
        ];

        return (
          <div className={`${style.hero} ${style.background}`}>
              <div className={style.greeting}>
                      <span className={style.greetingName}>Hi, I'm Eli.</span>
                      <Typist>
                          <Typist.Delay ms={initialDelayInMs}/>
                          <span>I am a </span>
                          {
                              sentences.map((sentence, index) => {
                                  return (
                                    <span key={index}>
                                      <span>{sentence}</span>
                                      <Typist.Backspace count={sentence.length} delay={delayInMs}/>
                                    </span>
                                  )
                              })
                          }
                          <span className={style.purple}>Fullstack developer</span><span>.</span>
                          <br/>
                          <span>I enjoy writing software for fun and profit.</span>
                      </Typist>
              </div>
          </div>
        )
    }
}