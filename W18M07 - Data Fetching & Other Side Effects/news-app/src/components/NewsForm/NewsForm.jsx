import { useState, useEffect } from 'react';

import './newsform.css';

const NewsForm = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isReady, setIsReady] = useState(false);
    const [apiKey, setAPIKey] = useState("place_the_api_key_here");

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const formSubmission = (event) => {
        event.preventDefault();
        setIsReady(true);
    }

    useEffect(() => { 
        const fetchTheNews = async () => {
            const URL = `https://newsapi.org/v2/everything?q=${searchTerm}`;
            const settings = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            };
            const response = await fetch(URL, settings);
            const data = await response.json();
            props.setArticles(data.articles);
            setSearchTerm("");
        }

        if(isReady){
            fetchTheNews();
            setIsReady(false);
        }
    }, [isReady]);

    return(
        <form className="News-Form" onSubmit={formSubmission}>
            <label htmlFor="searchTerm">
                Please type what news you want to retrieve:
            </label>
            <input type="text" 
                   id="searchTerm" 
                   className="text-input"
                   onChange={updateSearchTerm} 
                   value={searchTerm}/>
            <button type="submit" className="btn"> Get the news! </button>
        </form>
    );
}

export default NewsForm;