const ratingButtons = document.querySelectorAll('.rating-btn');

ratingButtons.forEach(btn => {
    btn.addEventListener('click', changeButton);
});

function changeButton(event) {
    ratingButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
};

function displaySubmit() {
    const hidden = document.getElementsByClassName('hide');

    hidden.forEach(el => {
        el.classList.remove('hide');

    });

    const radios = document.querySelectorAll('input');
    radios.forEach(radio => {
        radio.classList.add('hide');
    });

    const displayed = document.getElementsByClassName('show');

    displayed.forEach(el => {
        el.classList.add('hide');
        el.classList.remove('show');
    });

    let rating = document.querySelector('input[name="rating"]:checked').value;

    document.getElementById('feedback').innerText = `You selected ${rating} out of 5`;
};

const form = document.getElementById('ratingform');

form.addEventListener('submit', displaySubmit);