// JavaScript Document
(function(){
    "use strict";
/** TODO:
 *  - Variable to track score
 *  - Variables for button and point div
 *  - Link with querySlector to select elements
 *  - Use inner html to display score on screen
 * /

    /* Variables */
    var clickNums = 0;
    var pointButton = document.querySelector('#pointButton');
    var score = document.querySelector('#score');
    
    score.innerHTML = clickNums ;

    /* Functions */
    function clickInc() {
        ++clickNums;
        if( clickNums % 10 == 0) {
            score.innerHTML = '<span style="color: red">' + clickNums  +'</span>';
        } else {
            score.innerHTML = clickNums;
        }    
        console.log('Click worked');
    }

    /* Listeners */
    pointButton.addEventListener('click', clickInc, false);
})();