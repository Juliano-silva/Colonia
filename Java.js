const chat = document.getElementById("chat");
function load(){
  const novoH1 =  "<p id='play'>Numberlessama"+ "<span>:kkkkkkk</span>";
  const novoH2 =  "<p id='play'>Numberlessama2"+ "<span>:kkkkkkkk</span>";
  chat.insertAdjacentHTML("beforeend",novoH1)
  setTimeout(function(){
    chat.insertAdjacentHTML("beforeend",novoH2)
  },1000 )

}

button.addEventListener("loadstart",load);