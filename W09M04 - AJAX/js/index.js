
const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const $dogForm = $('.dog-image-info');

$dogForm.on('submit', (event) => {
    event.preventDefault();
    const $numOfDogs = $('#number-of-dogs').val();
    console.log("Doing the request with jQuery.ajax()")
    $.ajax({
        url: `${BASE_URL}/${$numOfDogs}`,
        method: 'GET',
        success: (responseJSON) => {
            const results = $('.results').html("");
            responseJSON.message.forEach((imgUrl) => {
                results.append(`<img class="image-card" src="${imgUrl}" alt="Image of a dog">`);
            });
        },
        error: (error) => {
            console.log(error);
        }
    });
    /*
    $.get(`${BASE_URL}/${$numOfDogs}`)
        .done((responseJSON) => {
            const results = $('.results').html("");
            responseJSON.message.forEach((imgUrl) => {
                results.append(`<img class="image-card" src="${imgUrl}" alt="Image of a dog">`);
            });
        })
        .fail((error) => {
            console.log(error);
        }); */
});

/*
const dogForm = document.querySelector('.dog-image-info');

dogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const numberOfDogs = document.querySelector('#number-of-dogs').value;
    console.log(numberOfDogs);
    const url = `${BASE_URL}/${numberOfDogs}`;
    
    const settings = {
        method: 'GET',
    };

    // Promise
    fetch(url, settings)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            throw Error(`Something went wrong: ${response.status}`);
        })
        .then((responseJSON) => {
            const results = document.querySelector('.results');
            results.innerHTML = "";
            console.log("Images about to load in the page");
            responseJSON.message.forEach((imgUrl) => {
                results.innerHTML += `<img class="image-card" src="${imgUrl}" alt="Image of a dog">`;
            });
        })
        .catch((error) => {
            console.log(error);
        });

    console.log("This log will come up first");

    
});
*/

const NEWS_API_KEY = "e993fe0805de4ec0abaff5d967e9302a";
$newsForm = $('.news-info');
$newsForm.on('submit', (event) => {
    event.preventDefault();

    const $searchCriteria = $('#search-term').val();
    const $numOfNews = $('#num-of-news').val();
    console.log("Using api key now in header!");
    $.ajax({
        url: 'https://newsapi.org/v2/everything',
        method: 'GET',
        data: {
            // apiKey: NEWS_API_KEY,
            q: $searchCriteria,
            pageSize: $numOfNews
        },
        headers:{
            'X-Api-Key': NEWS_API_KEY
        }, 
        success: (responseJSON) => {
            const $newsResults = $('.news-results').empty();
            responseJSON.articles.forEach((article) => {
                $newsResults.append(`
                    <div class="article">
                        <h2> ${article.title} </h2>
                        <div class="article-image">
                            <img src="${article.urlToImage}" alt="New image">
                        </div>
                        <p> ${article.author} </p>
                        <p> ${article.description} </p>
                        <p> <a href="${article.url}" target="_blank"> Source page </a>
                    </div>
                `);
            });
        },
        error: (error) => {
            console.log(error)
        }
    });
});