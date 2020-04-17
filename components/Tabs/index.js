// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let tabEntryPoint = document.querySelector('.topics');

function createTabDiv(object){
    const mainDiv = document.createElement('div');
          mainDiv.classList.add('tab');
          mainDiv.textContent = `${object}`;
          
    return mainDiv;
}


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then((resolve)=>{
        
        resolve.data.topics.forEach(element => {
        
        tabEntryPoint.appendChild(createTabDiv(element));
        });
    })
    .catch((error)=>{
        console.log(error);
    });


