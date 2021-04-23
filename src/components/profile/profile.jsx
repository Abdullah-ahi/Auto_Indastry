import React, { Component } from 'react';
import './profile.css';

import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Header } from 'components/Header';
import { LogOutBlock } from 'components/LogOutBlock'

import classNames from 'classnames'
export class Profile extends Component {
  state = {
    tel: '',
    InputIsVisible: false,
  }

  handleAddTel = () => {
    const { SignIn } = this.props
    const { tel } = this.state
    if (this.checkTel(tel)){
      this.removeErrors()
      SignIn({tel})
      this.setState({
        InputIsVisible: false,
      })
    }else{
      this.renderTelError()
    }
  }
  renderTelError = () => {
    this.removeErrors()
    const error = `<small class="error">Телефон должен быть введен в формате +7-000-000-0000</small>`
    document.querySelector('.profile-info').insertAdjacentHTML('beforeend', error)
  }
  removeErrors = () => {
    const errors = Array.from(document.querySelectorAll('.error'))
    errors && errors.forEach(error => error.remove())
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name
    this.setState({
      [fieldName]: event.target.value
    })
  }
  showInput = () => {
    const { InputIsVisible } = this.state
    this.removeErrors()
    this.setState({
      InputIsVisible: !InputIsVisible
    })
  }
  checkTel(tel){
    return /\+7[\-]\d{3}[\-]\d{3}[\-]\d{4}/.test(tel)
  }
  render(){
    const { Login } = this.props
    const { InputIsVisible } = this.state

    const inputClasses = classNames('tel', {
      'show': InputIsVisible,
      'hide': !InputIsVisible
    })
    const BtnClasses = classNames('log-out-block-btn', {
      'show': InputIsVisible,
      'hide': !InputIsVisible
    })
    return(
      <div>
        <Header Login={Login}/>
        <div className="profile-info-container">
          {Login.login 
          ? 
          <div className="profile-info">
            <h1>{Login.login}</h1>
            <h2 className="login-tel">{Login.tel}</h2>
            <Button onClick={this.showInput} className="show-input-btn" variant="outlined" color="inherit">{Login.tel ? 'Изменить телефон' : 'Добавить телефон'}</Button>
            <Input name="tel" onChange={this.handleInputChange} type="tel" placeholder="+7-000-000-0000" variant="outlined" multiline={false}  className={inputClasses}></Input>
            <Button onClick={this.handleAddTel} className={BtnClasses} variant="outlined" color="inherit">Добавить</Button>
          </div> 
          :
          <LogOutBlock/>
          }
        </div>
      </div>
    )
  }
}