// JavaScript Document
let textArea = document.getElementById('floatingTextarea');
let btn = document.getElementById('sound');
let Myalert = document.getElementsByClassName('Myalert')[0];

btn.addEventListener('click', function(){
   if(textArea.value==""){
       Myalert.classList.add('d-block');
   }else{
    responsiveVoice.speak(
    textArea.value,
    "Indonesian Female",
    {
     pitch: 1, 
     rate: 1, 
     volume: 1
}
  );
   }
});