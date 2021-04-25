// create variables and assign where the data has to go
const beerName = document.getElementById('beer_name');
const beerBtn = document.getElementById('beer_btn');
const beerImg = document.getElementById('beer_img');
const beerDesc = document.getElementById('beer_desc');
const likeBtn = document.getElementById('like_btn');
const dislikeBtn = document.getElementById('dislike_btn');
// create the functions for buttons
beerBtn.addEventListener('click', getRandomBeer);
likeBtn.addEventListener('click', function (){alert("You liked the beer!")});
dislikeBtn.addEventListener('click', function (){alert("You didn't like the beer!")});
// call the fetch
getRandomBeer ();
// make the fetch as an async function to allow the DOM to load first
async function getRandomBeer () {
    const getBeer = await fetch('https://api.punkapi.com/v2/beers/random', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const beer = await getBeer.json();
    //log the beer
    console.log(beer);
    //asign the json info into correct tag
    beerImg.innerHTML = `<img src="${beer[0].image_url}"/>`;
    beerName.innerHTML = beer[0].name;
    beerDesc.innerHTML = beer[0].description;
}