import LoadingAnimation from "../../assets/spinning-dots.svg"
export default function NewsCard(props: any) {

    const article = props.article;

    // const loading = () => {
    //     return (
    //         <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     )
    // }

    return (
        <div className="card p-0" style={{ width: "18rem" }} data-bs-theme="dark">
            <img src={article.urlToImage ? article.urlToImage : LoadingAnimation} className="card-img-top card_img" alt={article.title} />
            <div className="card-body p-1">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
}
