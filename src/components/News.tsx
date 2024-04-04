import axios from "axios";
import NewsCard from "./News/NewsCard";
import { useEffect, useState } from "react";

export default function News(props: any) {

    const [news, setNews] = useState<any>()
    const [totalPageNumber, setTotalPageNumber] = useState<number>()

    useEffect(()=>{
      axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=12&page=1&apikey=${import.meta.env.VITE_API_KEY}`)
        .then(response => {
          const data = response.data;
          setNews(data)
          setTotalPageNumber(Math.floor(data.totalResults / 12))
        }).catch( err =>{
          console.error(err)
        })
    },[props.category])

    console.log(news)
    console.log(props.category)

    
    // setTotalPageNumber(Math.floor(news?.totalResults / 12))
    // console.log(totalPageNumber)

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

    const page: any = () => {
                        if(totalPageNumber) {
                            [...Array(totalPageNumber)].map(num =>{
                                    console.log(num)
                                    const tempnum: number = 0;
                                    return <li className="page-item"><a className="page-link" href="#">{tempnum + 1}</a></li>

                                })
                            }
                        }
    return (
        <div className="container-fluid justify-content-center ms-0 me-0 mt-3 gap-3 row">
            {showArtical()}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {page()}
                </ul>
            </nav>
        </div>
    );
}