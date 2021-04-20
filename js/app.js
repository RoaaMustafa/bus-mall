'use strict';
let container =document.getElementById('sec-one');
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
let arrOfVotes = [];
let arrOfnames=[];
let arrOfdisplay=[];

// create constructor function
function Catalog (name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.display=0;
  Catalog.allImages.push(this);
}
// an attribute
Catalog.allImages =[];
// instances
new Catalog('bag','./images/bag.jpg');//[0]
new Catalog('banana','./images/banana.jpg');//[1]
new Catalog('bathroom','./images/bathroom.jpg');//[2]
new Catalog('boots','./images/boots.jpg');//[3]
new Catalog('breakfast','./images/breakfast.jpg');//[4]
new Catalog('bubblegum','./images/bubblegum.jpg');//[5]
new Catalog('chair','./images/chair.jpg');//[6]
new Catalog('cthulhu','./images/cthulhu.jpg');//[7]
new Catalog('dog-duck','./images/dog-duck.jpg');//[8]
new Catalog('dragon','./images/dragon.jpg');//[9]
new Catalog('pen','./images/pen.jpg');//[10]
new Catalog('pet-sweep','./images/pet-sweep.jpg');//[11]
new Catalog('scissors','./images/scissors.jpg');//[12]
new Catalog('shark','./images/shark.jpg');//[13]
new Catalog('sweep','./images/sweep.png');//[14]
new Catalog('tauntaun','./images/tauntaun.jpg');//[15]
new Catalog('unicorn','./images/unicorn.jpg');//[16]
new Catalog('usb','./images/usb.gif');//[17]
new Catalog('water-can','./images/water-can.jpg');//[18]
new Catalog('wine-glass','./images/wine-glass.jpg');//[19]
//to set items Catalog.allImages into localstorage
function saveToLs(){
  //console.log(JSON.stringify(Catalog.allImages));
  let storage =JSON.stringify(Catalog.allImages);
  localStorage.setItem('imagesSaved',storage);
}
// getting the item from the LS and it should have a key
function getStorageItem() {
  let data = localStorage.getItem('imageSaved');
  // Converting from JSON Format to normal Arr of object
  let order = JSON.parse(data);
  console.log(data);
  //   let list = JSON.parse(data || '[]');
  if (order !== null) {
    Catalog.allImages = order;
    // renderList();
  }
}
let arrOfindex=[];
function renderThreeImages(){
  firstIndex = genrateRandomIndex();
  secondIndex = genrateRandomIndex();
  thirdIndex = genrateRandomIndex();
  // Catalog.allImages.push(this.);
  while(firstIndex === secondIndex || firstIndex===thirdIndex || secondIndex===thirdIndex||arrOfindex.includes(firstIndex)||arrOfindex.includes(secondIndex)||arrOfindex.includes(thirdIndex)){
    firstIndex = genrateRandomIndex();
    secondIndex= genrateRandomIndex();
    thirdIndex= genrateRandomIndex();
  }
  // console.log(arrOfindex);

  // displaying the images
  firstImageElement.src = Catalog.allImages[firstIndex].source;
  Catalog.allImages[firstIndex].display++;
  arrOfindex[0]=(firstIndex);
  secondImageElement.src = Catalog.allImages[secondIndex].source;
  Catalog.allImages[secondIndex].display++;
  arrOfindex[1]=(secondIndex);
  thirdImageElement.src =Catalog.allImages[thirdIndex].source;
  Catalog.allImages[thirdIndex].display++;
  arrOfindex[2]=(thirdIndex);
}
renderThreeImages();
container.addEventListener('click', handleClicking);
getStorageItem();
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
    }
    renderThreeImages();
    saveToLs();
    // console.log(Catalog.allImages);
  }else {
    // renderList();
    alert ('Press to see Results');
    container.removeEventListener('click', handleClicking);
  }
}
let button =document.getElementById('btn');
button.addEventListener('click',showingList);
function showingList (){
  renderList();
  chart();
  button.removeEventListener('click',showingList);
}
function renderList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <Catalog.allImages.length;i++){
    arrOfnames.push(Catalog.allImages[i].name);
    arrOfVotes.push(Catalog.allImages[i].votes);
    arrOfdisplay.push(Catalog.allImages[i].display);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Catalog.allImages[i].name} it has ${Catalog.allImages[i].votes} Votes and it has been displayed for ${Catalog.allImages[i].display } times`;
  }
}
console.log(Catalog.allImages);

function genrateRandomIndex(){
  return Math.floor(Math.random() * Catalog.allImages.length);
}
function chart(){
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrOfnames,
      datasets: [{
        label: '# of Votes',
        data: arrOfVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 1
      },{
        label:'# of View',
        data: arrOfdisplay,
        backgroundColor:[
          'rgb(192,192,192)',
        ],
        borderWidth: 1
      }]
    },
  });
}
