const ratingButtons = document.querySelectorAll('.rating-btn');

ratingButtons.forEach(btn => {
    btn.addEventListener('click', changeButton);
});

function changeButton(event) {
    ratingButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
})
}