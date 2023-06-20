'use strict';   // use stric는 말도 안되는 언어사용을 막아준다.

console.log('Hello World');

var images = [
    "./asset/img.jpg",
    "./asset/img2.jpg",
    "./asset/img3.jpg"
  ]
  
  let imageClass = document.querySelector(".background");
  let i = 0;
  
  setInterval(() => {
    
    imageClass.style.backgroundImage = `url(${images[i]})`;
    i = i + 1;
        
    console.log(i);
    if (i == images.length) {
      i =  0;
    }
  }, 4000);


// const img = document.querySelector("img");
// img.src = "asset/img.jpg";


// const testFun = () => {  //function name (){}
//     img.src = "asset/img2.jpg";

//  };


// let count = 0;
// setInterval(() => {

//     let imagineIndex  = 1;
    

// }, 500);

// testFun(imageIndex )
