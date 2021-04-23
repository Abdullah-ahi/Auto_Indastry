import React, { Component } from 'react';
import { Header } from 'components/Header'
import './news.css'

export class News extends Component {
  componentDidMount(){
    const { news, setNews } = this.props
    let API = `https://newsapi.org/v2/everything?q=auto industry&apiKey=4e016d415a11418d81892362337c0730`
    const imgPlug = "https://techcrunch.com/wp-content/uploads/2019/01/GettyImages-958125096.jpg?w=600";
    news.length ? 
    this.renderNews(news, imgPlug)
    :
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.renderNews(data.articles, imgPlug)
      setNews(data.articles)
    })
  }
  renderNews = (news, imgPlug) => {
    news.forEach(article => {
      const block = `<div class="news-item">
        <img class="news-item-img" src=${article.urlToImage ? article.urlToImage : imgPlug} alt="photo"/>
        <a class="news-item-link" href=${article.url} target="blank">
          <span class="news-item-title">${article.title}</span>
          <p class="news-item-desc">${article.description}</p>
        </a>
      </div>`
      document.querySelector('.news-block').insertAdjacentHTML('afterbegin', block)
    })
  }
  render(){
    const { Login, news } = this.props
    console.log(news)
    return(
      <div>
        <Header Login={Login}/>
        <main>
          <h1 className="news-head">Cars industry news</h1>
          <div className="news-block">

          </div>
        </main>
      </div>
    )
  }
}