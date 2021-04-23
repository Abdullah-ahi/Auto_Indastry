import React, { PureComponent } from 'react';
import { News } from 'components/news';
import { connect } from 'react-redux';
import { setNews } from 'actions'

class newsContainer extends PureComponent {

  render(){
    const { loginData, news, setNews } = this.props
    return (
      <News Login={loginData} news={news} setNews={setNews}/>
    )
  }
}

function mapStateToProps(state, ownProps){
  const loginData = state.data.getIn(['entries', 'profile']).toJS();
  const news = state.data.getIn(['entries', 'news']).toList().toJS();
  return {
    loginData,
    news
  }
}
function mapDispatchToProps(dispatch){

  return {
    setNews: (news) => dispatch(setNews(news))
  }
}

export const newsRedux = connect(mapStateToProps, mapDispatchToProps)(newsContainer)