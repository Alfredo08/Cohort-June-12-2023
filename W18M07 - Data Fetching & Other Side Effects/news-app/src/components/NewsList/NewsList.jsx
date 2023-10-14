import { useState } from "react";
import NewsForm from "../NewsForm/NewsForm";
import Articles from "../Articles/Articles";
import './newslist.css';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    return(
        <div className="News-List">
            <NewsForm setArticles={setArticles}/>
            <div width="80%">
            {articles.map((article, index) => {
                return(<Articles article={article} key={index} />);
            })}
            </div>
            
        </div>
    );
}

export default NewsList;