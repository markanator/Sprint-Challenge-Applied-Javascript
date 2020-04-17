// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let headEntryPoint = document.querySelector('.header-container');

function headerCreater() {
    const mainDiv = document.createElement('div');
          mainDiv.classList.add('header');
          
    const dateSpan = document.createElement('span');
          dateSpan.classList.add('date');
          dateSpan.textContent = 'April 17, 2020';

    const titleTag = document.createElement('h1');
          titleTag.textContent = 'Lambda Times';
    const tempSpan = document.createElement('span');
          tempSpan.classList.add('temp');
          tempSpan.textContent = '98°F';

    mainDiv.appendChild(dateSpan);
    mainDiv.appendChild(titleTag);
    mainDiv.appendChild(tempSpan);

    return mainDiv;
}

headEntryPoint.appendChild(headerCreater());