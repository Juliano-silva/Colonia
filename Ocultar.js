const you = document.getElementById("You");
var i=0;
function ocult(){
   if(!i){
       you.style.display="none";
       i=1;
    }
    else{
        you.style.display="inline";
        i=0;
    }
}