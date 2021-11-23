import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './news.css'
import Cards from '../cards/Cards'
function News() {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=2a81d7369b694cc3ad26c453f2b94a16").then(
            (resp) => {
                setNewsData(resp.data.articles);
            }

        );
    }, [])

    return (
        <div>
            <div className="row">
                {
                    newsData.map((item, i) => {
                        return (
                            
                            <Cards title={item.title} urlToImage={item.urlToImage} description={item.description} url = {item.url} key={i} />
                        )
                    })
                }
            </div>

        </div>
    )
}
export default News;
