/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselEntryPoint = document.querySelector('.carousel-container');

const mtnImg   = "./assets/carousel/mountains.jpeg";
const compImg  = "./assets/carousel/computer.jpeg";
const treesImg = "./assets/carousel/trees.jpeg";
const turnImg  = "./assets/carousel/turntable.jpeg";


function carouselComponent(){
  const mainDiv     = document.createElement('div');
        mainDiv.classList.add('carousel');

  const leftDiv      = document.createElement('div');
        leftDiv.classList.add('left-button');

  const mountainImg  = document.createElement('img');
        mountainImg.src = mtnImg;
        mountainImg.classList.add('slide');
  const pcImg        = document.createElement('img');
        pcImg.src    = compImg;
        pcImg.classList.add('slide');
  const treeImg      = document.createElement('img');
        treeImg.src  = treesImg;
        treeImg.classList.add('slide');
  const tableImg     = document.createElement('img');
        tableImg.src = turnImg;
        tableImg.classList.add('slide');

  const rightDiv     = document.createElement('div');
        rightDiv.classList.add('right-button');

  //structure
  mainDiv.appendChild(leftDiv);
  mainDiv.appendChild(mountainImg);
  mainDiv.appendChild(pcImg);
  mainDiv.appendChild(treeImg);
  mainDiv.appendChild(tableImg);
  mainDiv.appendChild(rightDiv);
  

  // Event Listeners
  leftDiv.addEventListener('click',()=>{
    plusSlides(-1);
  });
  rightDiv.addEventListener('click',()=>{
    plusSlides(1);
  });

  // console.log(mainDiv);
  return mainDiv;
}

carouselEntryPoint.appendChild(carouselComponent());

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(number) {
  showSlides(slideIndex += number);
}

function showSlides(number) {
  var i;
  var slides = document.getElementsByClassName('slide');

  if (number > slides.length) {
    slideIndex = 1
  }
  if (number < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}