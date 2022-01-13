let side=document.querySelector('aside');
let minu=document.querySelector('.minu');
let body= document.querySelector('body')
minu.addEventListener('click',(e)=>{
    e.preventDefault();
    e.target.parentElement.classList.toggle('close-minu');
    side.classList.toggle('asideminu');
});
let dark=document.querySelector('.darkminu');
dark.addEventListener('click',function(e){
    body.classList.toggle('dark');
});
let bq =document.querySelector(".home-header");
let imgs=["../images/home1.jpg","../images/home2.jpg","../images/home3.jpg","../images/home4.jpg"]
setInterval(function(){
    n=Math.floor(Math.random()*3);
    bq.style.backgroundImage = "url('"+imgs[n]+"')";
},5000);
