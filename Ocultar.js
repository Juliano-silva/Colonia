const you = document.getElementById("You");
const ocultar =  document.getElementById("ocultar");
const iframe = document.getElementById("iframe")
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