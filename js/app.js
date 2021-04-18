'use strict';

let oneImageElement = document.getElementById('img-one');
let twoImageElement = document.getElementById('img-two');
let threeImageElement = document.getElementById('img-three');
// whenever we click on an image we need to add one to a counter
// counts of the rounds till we reach 25
let counts = 0;
let maxAttempts = 5;
let firstIndex;
let secondIndex;
let thirdIndex;
// create constructor function
function Catalog (name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  Catalog.allImages.push(this);
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
console.log(Catalog.allImages);
