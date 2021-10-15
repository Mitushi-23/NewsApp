import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props)=> {
 
 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [articles, setaticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  
    // document.title = `${capitalizeFirstLetter(
    //   props.category,
    // )} - NewsApp`
  

 const updateNews=async()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setaticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
        
    props.setProgress(100)
  }

  useEffect(() => {
   updateNews();
  }, [])


  // const handlePrevClick = async () => {
  //   setpage(page-1);
  //   updateNews()
  // }
  
  // const handleNextClick = async () => {
  //   setpage(page+1);
  //   updateNews()
  // }

  const fetchMoreData = async () => {
    setpage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    setaticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  }

 
    return (
      <>
        <h1 className="text-center text-light" style={{ margin: '35px 0px',marginTop: '7%', marginBottom: '20px' }}>
          NewsApp - Top {capitalizeFirstLetter(props.category)}{' '}
          Headlines
        </h1>
        <div
          style={{
            borderBottomStyle: 'solid',
            borderBottomColor: '#ffc107',
            borderBottomWidth: 2,
            marginLeft: '40%',
            marginRight: '40%',
            marginBottom: '5%',
          }}
        ></div>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          style={{ overflow: 'hidden' }}
        >
          <div className="container my-3">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={
                        element.description ? element.description : ''
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }


export default News

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}