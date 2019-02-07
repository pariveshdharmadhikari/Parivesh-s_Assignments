var name1;     
var  name2;
var  score;
//window.onload= modal.style.display = "block";
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// var obj = {
//     name1:"",
//     name2:"",
//     score=0
// };


    function dataSubmit(){
    name1 = document.querySelector('#player-1-name').value;    
    name2 = document.querySelector('#player-2-name').value;
    score = document.querySelector('#maxScore').value;
   
 }
