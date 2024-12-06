/* global document,window,localStorage */

/* image chager */
var Img1 = document.querySelector('img');

Img1.onclick = function (){
    'use strict';
    var myImages = Img1.getAttribute('src');
    if (myImages === 'image/skiny.jpg'){
        Img1.setAttribute('src' , 'image/musale.jpg');
    }else{
        Img1.setAttribute('src', 'image/skiny.jpg');
    }
};

var Img2 = document.querySelector('img');

Img2.onclick = function (){
    'use strict';
    var myImages2 = Img2.getAttribute('src');
    if (myImages2 === 'image/sport.jpg'){
        Img2.setAttribute('src' , 'image/sport2.jpg');
    }else{
        Img2.setAttribute('src', 'image/sport.jpg');
    }
};


var Img3 = document.querySelector('img');

Img3.onclick = function (){
    'use strict';
    var myImages3 = Img3.getAttribute('src');
    if (myImages3 === 'image/fat.jpg'){
        Img3.setAttribute('src' , 'image/handsome.jpg');
    }else{
        Img3.setAttribute('src', 'image/fat.jpg');
    }
};



//Personalized welcome message

var  nameButton = document.querySelector('button');
var myHeading = document.querySelector ('h1');

function setUserName(){
    'use strict';
    var myName= window.prompt('please enter your name.');
    localStorage.setIteam('name', myName);
    myHeading.textContent = 'Have a nice day,' + myName;
}

if(!localStorage.getItem('name')){
    setUserNameame();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day,' + storedName;
}

nameButton.onclick = function () {
    'use strict';
    setUsername();
};