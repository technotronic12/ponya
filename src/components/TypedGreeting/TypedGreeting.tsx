import * as React from 'react';
import Typist from 'react-typist';
import * as style from './TypedGreeting.css';

export class TypedGreeting extends React.Component {

    render() {
        const initialDelayInMs = 1500;
        const delayInMs = 700;
        const sentences = [
            'Scala developer.',
            'Javascript developer.',
            'node developer.'
        ];

        return (
          <div>
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
                  <span className={style.purple}>Fullstack developer</span>.
              <Typist.Delay ms={delayInMs}/>
              <br/>
              <span>I enjoy writing software for fun and profit.</span>
              </Typist>
          </div>
        );
    }
}