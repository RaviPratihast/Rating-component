const ratings = document.querySelectorAll('.box');
const ratingBox = document.querySelector('.rating-boxes-container');

const submit=document.querySelector('.submit');


// ratings.forEach((e)=>console.log(e.innerText));
// here the rated value will be stored.
let rating;

ratingBox.addEventListener('click', function (e) {

    if (e.target.classList.contains('box')) {

        // console.log(e.target.textContent)
        if (rating === undefined) {
            rating = Number(e.target.textContent);

        }
        console.log(typeof rating, rating);
        // console.log(ratings.length);

    }
});


// submition part

submit.addEventListener('click',function(){


    console.log(`you have selected ${rating} out of ${ratings.length}`)
})