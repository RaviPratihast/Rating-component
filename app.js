const ratings = document.querySelectorAll('.box');
const ratingBox = document.querySelector('.rating-boxes-container');

const submit=document.querySelector('.submit');

const div=document.querySelector('.main-container');


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


    // console.log(`you have selected ${rating} out of ${ratings.length}`)

    div.innerHTML=`
    <div class="after-rating-svg-container"><img src="/images/illustration-thank-you.svg" alt=""></div>
    <div class="you-selected">
        <h3>You Selected ${rating} out of ${ratings.length}</h3>
    </div>
    <div class="text-container-thankyou">
        <div class="heading-thankyou">
            <h1>Thank you!</h1>
        </div>

        <div class="thankyou-para"><p>
            We appreciate you taking time to give a rating, if you ever need more support, don't hesitate to get in touch
        </p></div>
        
    </div>
    `


})