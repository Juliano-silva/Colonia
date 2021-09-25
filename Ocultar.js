const you = document.getElementById("You");
const ocultar =  document.getElementById("ocultar");
const iframe = document.getElementById("iframe");
const ch = document.getElementById("chat");
const oc = document.getElementById("ocultarC")
const txt = document.getElementById("textarea");
const fav = document.getElementById("favi");
const en = document.getElementById("enter");
var i=0;
function ocult(){
   if(!i){
       you.style.display="flex";
       you.style.marginTop="-1000px";
       iframe.style.width= "1575px";
       iframe.style.display="block";
       iframe.style.margin="auto"
       iframe.style.marginRight="350px"
       iframe.style.marginTop="-300px"
       i=1;
    }
    else{
        you.style.display="inline"
        you.style.marginTop="-5px";
        iframe.style.width= "1430px";
       iframe.style.display="block";
       iframe.style.margin="auto"
       iframe.style.marginRight="550px"
       iframe.style.marginTop="-300px"
        i=0;
    }
}
var i=0;
function ocultC(){
    if(!i){
        ch.style.display="flex";
        ch.style.marginTop="-1000px";
        txt.style.display="none"
        fav.style.display="none"
        en.style.display="none"
        oc.style.marginLeft="215px"
        oc.style.marginTop="-190px"
        iframe.style.width= "1650px";
       iframe.style.display="block";
       iframe.style.margin="auto"
       iframe.style.marginRight="350px"
       iframe.style.marginTop="-100px"
        i=1
    }
    else{
        ch.style.display="inline";
        ch.style.marginTop="-710px";
        txt.style.display="inline"
        fav.style.display="inline"
        en.style.display="inline"
        oc.style.marginLeft="-1px"
        oc.style.marginTop="2px"
        iframe.style.width= "1430px";
       iframe.style.display="block";
       iframe.style.margin="auto"
       iframe.style.marginRight="265px"
       iframe.style.marginTop="-100px"
        i=0
    }
}