import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Profile } from 'components/profile';
import { signIn } from 'actions'

class profileContainer extends PureComponent {

  render(){
    const { loginData, SignIn } = this.props
    return(
      <Profile Login={loginData} SignIn={SignIn}/>
    )
  }
}
function mapStateToProps(state, ownProps){
  const loginData = state.data.getIn(['entries', 'profile']).toJS()
  return{
    loginData,
  }
}
function mapDispatchToProps(dispatch){
  return {
    SignIn: (data) => dispatch(signIn(data))
  }
}

export const profileRedux = connect(mapStateToProps, mapDispatchToProps)(profileContainer)