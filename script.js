const aiData = {

labels:[
"2023",
"2024",
"2025"
],

datasets:[

{
label:"Män 18–84 år - Använt ChatGPT",
data:[25,30,37],
backgroundColor:"#FFC928"
},

{
label:"Kvinnor 18–84 år - Använt ChatGPT",
data:[24,28,30],
backgroundColor:"#B56CE2"
}

]

};



new Chart(
document.getElementById("aiChart"),
{

type:"bar",

data:aiData,

options:{

responsive:true,

plugins:{
title:{
display:true,
text:"Andel svenskar som använt ChatGPT senaste 12 månaderna (%)"
}
},

scales:{
y:{
beginAtZero:true,
max:100,
ticks:{
callback:function(value){
return value+"%";
}
}
}
}

}

});
const internetData = {

labels:[
"2021",
"2022",
"2023",
"2024",
"2025"
],

datasets:[

{
label:"Internetanvändare 16+ år",
data:[94,94,96,95,97],
backgroundColor:"#4EA5F5"
},

{
label:"Dagliga användare",
data:[90,90,91,91,93],
backgroundColor:"#58C4B0"
},

{
label:"Sällananvändare",
data:[4,4,4,5,4],
backgroundColor:"#FFD43B"
},

{
label:"Icke-användare",
data:[6,6,4,5,3],
backgroundColor:"#FF4D6D"
}

]

};



new Chart(
document.getElementById("internetChart"),
{

type:"bar",

data:internetData,

options:{

responsive:true,

plugins:{
title:{
display:true,
text:"Internetanvändning i Sverige 2021–2025 (%)"
}
},

scales:{
y:{
beginAtZero:true,
max:100,
ticks:{
callback:function(value){
return value+"%";
}
}
}
}

}

});
