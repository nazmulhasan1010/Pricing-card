const card = document.querySelectorAll('.card');
card.forEach(button => {
    button.addEventListener('click', function () {
        card.forEach(btn => btn.classList.remove('card-active'));
        this.classList.add('card-active');
    });
});