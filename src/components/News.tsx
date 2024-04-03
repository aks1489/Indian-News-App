import axios from "axios";
import NewsCard from "./News/NewsCard";
import { useEffect, useState } from "react";

export default function News() {

    const [news, setNews] = useState<any>()

    useEffect(()=>{
      axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=12&page=2&apikey=${import.meta.env.VITE_API_KEY}`)
        .then(response => {
          const data = response.data;
          setNews(data)
        }).catch( err =>{
          console.error(err)
        })
    },[])

    
    const page= Math.floor(news?.totalResults / 12)
    console.log(page)

    function showArtical() {
        if(news) {
            const art: [] = news.articles; 
            return art.map( (article: any, index: any) => {
                return <NewsCard key={index} article={article} />
            })
        } else {
            <h1>Loading...</h1>
        }
    }
    return (
        <div className="container-fluid justify-content-center ms-0 me-0 mt-3 gap-3 row">
            {showArtical()}
            
        </div>
    );
}