import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './loginForm.css';
import { Header } from 'components/Header'
import { Link } from 'react-router-dom';
import { Counter } from 'components/Counter'

export class LoginForm extends Component {
  state = {
    login: '',
    password: '',
    loginAttempts: 0,
    arrowState: {
      1: 'first',
      2: 'second',
      3: 'third',
      4: 'fourth',
      5: 'fifth',
      6: 'sixth',
      7: 'seventh',
      8: 'eighth',
      9: 'nineth',
      10: 'tenth'
    }
  }

  checkLogin = (login) => {
    return /[a-zA-Zа-яА-Я0-9_-]{2,10}$/.test(login)
  }

  checkPassword = (password) => {
    return /(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,15}/.test(password)
  }
  userDataIsValid = (login, password) => {
    return this.checkPassword(password) && this.checkLogin(login)
  }

  handleInputChange = (event) => {
    this.removeErrors()
    const fieldName = event.target.name
    this.setState({
      [fieldName]: event.target.value
    })
  }

  handleLogin = () => {
    const { SignIn } = this.props
    const { login, password } = this.state
    if (this.userDataIsValid(login, password)){
      SignIn({login, password})
    }else{
      this.handleLoginErrors(login, password);
      this.moveCounterArrow()
    }
  }
  moveCounterArrow = () => {
    const { loginAttempts, arrowState } = this.state
    let arrow = document.querySelector('.strelka')
    this.setState({
      loginAttempts: loginAttempts+1
    })
    if (arrowState[loginAttempts+1]) {
      arrow.classList.add(arrowState[loginAttempts+1])
    } else {
      arrow.className="strelka"
      this.setState({
        loginAttempts: 0
      })
    }
  }
  removeErrors = () => {
    let errors = Array.from(document.querySelectorAll('.error'))
    errors && errors.forEach(error => error.remove())
  }
  handleLoginErrors = (login, password) => {
    this.removeErrors()
    let data = { login, password }
    for (let key in data){
      if (key == 'login' && !this.checkLogin(login)){
        this.renderLoginError()
      }else if (key == 'password' && ! this.checkPassword(password)){
        this.renderPasswordError()
      }
    }
  }
  renderLoginError = () => {
    const error = `<small class="error">Логин должен иметь длину от 2 до 10 символов не должен содержать спецсимволы и пробелы</small>`
    document.querySelector('.login').insertAdjacentHTML('afterend', error)
  }
  renderPasswordError = () => {
    const error = `<small class="error">Пароль должен содержать буквы, числа, спецсимволы и быть в длину от 6 до 15 символов</small>`
    document.querySelector('.password').insertAdjacentHTML('afterend', error)
  }
  checkLinkPath = (login, password) => {
    return this.checkLogin(login) && this.checkPassword(password)
  }
  
  render(){
    const { login, password } = this.state
    const { Login } = this.props
    return(
      <div>
        <Header Login={Login}/>
        <div className="login-form">
          <Counter/>
          <div className="form-wrapper">
            <TextField name="login" onChange={this.handleInputChange} className="text-input login" id="standard-required" label="Login"/>
            <TextField name="password" onChange={this.handleInputChange} className="text-input password" id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>
            <Link to={this.checkLinkPath(login, password) ? '/profile' : '/login'} className="login-link">
              <Button onClick={this.handleLogin} className="login-btn" variant="outlined" color="primary">LOGIN</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}