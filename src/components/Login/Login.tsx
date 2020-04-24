import React from 'react';
import * as style from './Login.scss';

export class Login extends React.Component<{}, {}> {
  render() {
    return (
      <form className={ style.loginForm }>
        <h2 className={ style.loginHeading }>Please Login</h2>
        <label htmlFor={ style.emailInput } className={ style.srOnly }>Email address</label>
        <input type="email" id={ style.emailInput } className={ style.formControl } placeholder="Email"/>
        <label htmlFor={ style.passwordInput } className={ style.srOnly }>Email address</label>
        <input type="password" id={ style.passwordInput } className={ style.formControl } placeholder="Password"/>
        <button className={ style.loginSubmit } type="button">Login</button>
      </form>
        )
    }
}
