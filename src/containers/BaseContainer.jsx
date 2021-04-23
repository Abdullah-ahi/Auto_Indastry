import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Head } from 'components/Head';
import { setNews } from 'actions'

class BaseContainer extends PureComponent {

  render(){
    const { loginData, news, setNews } = this.props
    return(
      <Head Login={loginData} news={news} setNews={setNews}/>
    )
  }
}

function mapStateToProps(state, ownProps){
  const loginData = state.data.getIn(['entries', 'profile']).toJS()
  const news = state.data.getIn(['entries', 'news']).toList().toJS();

  return{
    loginData,
    news,
  }
}

function mapDispatchToProps(dispatch){
  return{
    setNews: (news) => dispatch(setNews(news))
  }
}

export const BaseRedux = connect(mapStateToProps, mapDispatchToProps)(BaseContainer)