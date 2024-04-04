import LoadingAnimation from "../../assets/notFound.svg"
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
            <div style={{maxHeight: "12.5rem"}} className="card-body p-1">
                <h5 className="card-title">{article.title}</h5>
                <div data-bs-spy="scroll" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2 scroller" tabIndex={0}>
                    <p className="artical_description">{article.description ? article.description : "Go to the source site to see the full news"}</p>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
        </div>
    );
}
