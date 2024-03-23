document.addEventListener('DOMContentLoaded', function () {
    const burgerToggle = document.getElementById('burger-toggle');
    const navMob = document.querySelector('.nav-mob');

    burgerToggle.addEventListener('change', function () {
        if (this.checked) {
            navMob.style.display = 'block';
        } else {
            navMob.style.display = 'none';
        }
    });
});
