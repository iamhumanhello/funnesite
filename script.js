const button = document.getElementById('myButton');
let timesPressed = 0
function heTouchedit() {
  if(timesPressed==0){
    button.textContent = "hey stop it";
    timesPressed+=1;
  }
  else if(timesPressed==1){
    button.textContent = "no";
    timesPressed+=1;
  }
  else if(timesPressed==2){
    button.textContent= "i hate you";
    timesPressed+=1
  }
  else if(timesPressed==3){
    alert(`Privacy Settings have been reset, including IP address and Location settings.
'theinigoland' is currently accessing your location.`);
    button.textContent = "Don't answer the door";
    timesPressed+=1
  }

}
button.addEventListener('click', heTouchedit);
