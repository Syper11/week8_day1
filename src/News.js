import React, { Component } from 'react'

export default class News extends Component {
  constructor(){
    super();
    this.state = {
        articles:[]
    }
  }
  
  getNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-01-07&sortBy=publishedAt&apiKey=24848968ae414b01a17d645636d6fcd1`);
    const data = await res.json();
    const articles = data.articles;
    this.setState({articles: articles})

  }
  
  componentDidMount(){
    setTimeout(this.getNews, 4000)
  }

showArticles = () => {
    return this.state.articles.map(a=> <div>{a.title}</div>)
}
  
    render() {
    return (
      <div>
        <h1>News</h1>
        {this.state.articles.length ==0?<p>loading..</p>:this.showArticles()}
      </div>
    )
  }
}
