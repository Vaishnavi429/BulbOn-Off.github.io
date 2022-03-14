
let cont=document.getElementById("cont");
let OnBtn = document.getElementById("OnBtn");
OnBtn.addEventListener('click',function(e){
    console.log("on");
    let changeImg = document.getElementById("changeImg");
    changeImg.src="OnBulb.jpg";


});


let OffBtn = document.getElementById("OffBtn");
OffBtn.addEventListener('click',function(e){
    console.log("off");
    changeImg.src="offbulb.jpeg";
  

})