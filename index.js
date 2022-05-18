let rating = 0;
const submit = document.getElementById('submit-button');
const activeCard = document.getElementById('card-one').classList;
const thankYouCard = document.getElementById('card-two').classList;
const ratingButtons = document.querySelectorAll('.rating-btn');

ratingButtons.forEach(btn => {
    btn.addEventListener('click', changeButton);
});

ratingButtons.forEach(btn => {
    btn.addEventListener('click', changeValue);
});

submit.addEventListener('click', changeState);

function changeButton(event) {
    ratingButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
};

function changeValue(event) {
    rating = event.target.innerText;
}

function changeState() {
    if (rating === 0) {
        alert('Must select rating!');
        return;
    } else {
        activeCard.add('hidden');
        thankYouCard.remove('hidden');
        let feedback = document.getElementById('feedback');
        feedback.innerText = `You selected ${rating} out of 5`;
    };
};





