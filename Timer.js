"use strict"
var hh =0;
var mm =0;
var ss =0;
var s1 =0;
var m2 =0;
var tempo = 1000;
var tempo1 = 10000;
var cron;

function Com(){
    cron = setInterval(() => {timer();}, tempo);
}
function timer(){
    ss++;
    if (ss==60){
        ss = 0;
        mm++;
        
        if(mm == 60){
            mm = 0;
            hh++;
        }
    }
    var format = (hh <10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) ;
    document.getElementById('horas').innerText = format;
}
function tim(){
    cron = setInterval(() => {timer1();}, tempo1);
}
function timer1(){
    s1++;
    if (s1==1000){
        s1 = 0;
        mm++;
        if(m2 == 1000){
            m2 = 0;
            hh++;
        }
    }
    var format2 = (m2 <50? '13' + m2 : m2) + ',' + (s1 < 10 ? '0' + s1: s1) + ' milhões';
    document.getElementById('milhões').innerText= format2 ;
}