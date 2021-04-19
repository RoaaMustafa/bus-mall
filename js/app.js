'use strict';

let firstImageElement = document.getElementById('img-one');
let secondImageElement = document.getElementById('img-two');
let thirdImageElement = document.getElementById('img-three');
// whenever we click on an image we need to add one to a counter
// counts of the rounds till we reach 25
let counts = 0;
let maxAttempts = 25;
let firstIndex;
let secondIndex;
let thirdIndex;
// create constructor function
function Catalog (name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.numDisplay=0;
  Catalog.allImages.push(this);
}
// an attribute
Catalog.allImages =[];
// instances
new Catalog('bag','../images/bag.jpg');//[0]
new Catalog('banana','../images/banana.jpg');//[1]
new Catalog('bathroom','../images/bathroom.jpg');//[2]
new Catalog('boots','../images/boots.jpg');//[3]
new Catalog('breakfast','../images/breakfast.jpg');//[4]
new Catalog('bubblegum','../images/bubblegum.jpg');//[5]
new Catalog('chair','../images/chair.jpg');//[6]
new Catalog('cthulhu','../images/cthulhu.jpg');//[7]
new Catalog('dog-duck','../images/dog-duck.jpg');//[8]
new Catalog('dragon','../images/dragon.jpg');//[9]
new Catalog('pen','../images/pen.jpg');//[10]
new Catalog('pet-sweep','../images/pet-sweep.jpg');//[11]
new Catalog('scissors','../images/scissors.jpg');//[12]
new Catalog('shark','../images/shark.jpg');//[13]
new Catalog('sweep','../images/sweep.png');//[14]
new Catalog('tauntaun','../images/tauntaun.jpg');//[15]
new Catalog('unicorn','../images/unicorn.jpg');//[16]
new Catalog('usb','../images/usb.gif');//[17]
new Catalog('water-can','../images/water-can.jpg');//[18]
new Catalog('wine-glass','../images/wine-glass.jpg');//[19]
//console.log(Catalog.allImages);
function renderThreeImages(){
  firstIndex = genrateRandomIndex();
  secondIndex = genrateRandomIndex();
  thirdIndex = genrateRandomIndex();
  while(firstIndex === secondIndex || firstIndex===thirdIndex || secondIndex===thirdIndex ){
    firstIndex = genrateRandomIndex();
    secondIndex= genrateRandomIndex();
    while(firstIndex === secondIndex){
      secondIndex= genrateRandomIndex();
    }
  }
  // console.log(firstIndex);
  // console.log(secondIndex);
  // console.log(thirdIndex);
  // Catalog.allImages[3].source
  // displaying the images
  firstImageElement.src = Catalog.allImages[firstIndex].source;
  Catalog.allImages[firstIndex].numDisplay++;
  secondImageElement.src = Catalog.allImages[secondIndex].source;
  Catalog.allImages[secondIndex].numDisplay++;
  thirdImageElement.src =Catalog.allImages[thirdIndex].source;
  Catalog.allImages[thirdIndex].numDisplay++;
}
renderThreeImages();
firstImageElement.addEventListener('click', handleClicking);
secondImageElement.addEventListener('click',handleClicking);
thirdImageElement.addEventListener('click',handleClicking);
function handleClicking(event){
  // console.log(event.target.id);
  counts++;
  if(maxAttempts >= counts){
    if(event.target.id ==='img-one'){
      Catalog.allImages[firstIndex].votes++;
    }else if(event.target.id ==='img-two'){
      Catalog.allImages[secondIndex].votes++;
    }else if(event.target.id ==='img-three'){
      Catalog.allImages[thirdIndex].votes++;
    }else {
      alert('you should click on an image');
      counts--;
    }
    renderThreeImages();
    console.log(Catalog.allImages);
  }else {
    renderList();
    firstImageElement.removeEventListener('click', handleClicking);
    secondImageElement.removeEventListener('click',handleClicking);
    thirdImageElement.removeEventListener('click',handleClicking);
  }
}
function renderList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <Catalog.allImages.length;i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Catalog.allImages[i].name} it has ${Catalog.allImages[i].votes} Votes and it has displayed for ${Catalog.allImages[i].numDisplay } times`;
  }
}
console.log(Catalog.allImages);

function genrateRandomIndex(){
  return Math.floor(Math.random() * Catalog.allImages.length);
}
