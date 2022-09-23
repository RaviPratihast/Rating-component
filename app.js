const ratings=document.querySelectorAll('.box');
const ratingBox=document.querySelector('.rating-boxes-container');


// ratings.forEach((e)=>console.log(e.innerText));

ratingBox.addEventListener('click',function(e){

    if(e.target.classList.contains('box')){

        console.log(e.target.textContent)
    }
});