import './articles.css';

const Articles = (props) => {
    return(
        <div className="Article-Card">
            <h2> <a href={props.article.url} target="_blank">{props.article.title}</a> </h2>
            <img src={props.article.urlToImage} alt={props.article.title} />
            <h6> {props.article.author} </h6>
            <p> {props.article.description} </p>
        </div>
        
    );
}

export default Articles;