// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardEntryPoint = document.querySelector('.cards-container');

let xhr = new XMLHttpRequest();
let url = 'https://lambda-times-backend.herokuapp.com/articles';
xhr.open("GET", url);
xhr.send(null);



function createArticle(object){
    const mainDiv = document.createElement('div');
          mainDiv.classList.add('card');

    const headLineDiv = document.createElement('div');
          headLineDiv.classList.add('headline');
          headLineDiv.textContent = `${object.headline}`

    const authorDiv = document.createElement('div');
          authorDiv.classList.add('author');

    const imageDiv = document.createElement('div');
          imageDiv.classList.add('img-container');

    const articleImg = document.createElement('img');
          articleImg.src = object.authorPhoto;

    const authorSpan = document.createElement('span');
          authorSpan.textContent = `By ${object.authorName}`;

    mainDiv.appendChild(headLineDiv);
    mainDiv.appendChild(authorDiv);
    authorDiv.appendChild(imageDiv);
    imageDiv.appendChild(articleImg);
    authorDiv.appendChild(authorSpan);


    
    return mainDiv;
}

let siteData = [];

xhr.onload = ()=>{

    // using JSON to parse through the data
    let tempData = JSON.parse(xhr.response);
    //console.log(tempData["articles"]);

    // lets make one big articles array 
    let javaPosts = Array.from(tempData["articles"]["javascript"]);
    javaPosts.forEach((post)=>{
        siteData.push(post);
    });

    // adding to the articles array
    let bootPosts = Array.from(tempData["articles"]["bootstrap"]);
    bootPosts.forEach((post)=>{
        siteData.push(post);
    });

    // adding to the articles array
    let techPosts = Array.from(tempData["articles"]["technology"]);
    techPosts.forEach((post)=>{
        siteData.push(post);
    });

    // adding to the articles array
    let jPosts = Array.from(tempData["articles"]["jquery"]);
    jPosts.forEach((post)=>{
        siteData.push(post);
    });

    // adding to the articles array
    let nodePosts = Array.from(tempData["articles"]["node"]);
    nodePosts.forEach((post)=>{
        siteData.push(post);
    });

    // Let's iterate through the article array and render them to the screen!
    siteData.forEach((article)=>{
        cardEntryPoint.appendChild(createArticle(article));
    });
    
};