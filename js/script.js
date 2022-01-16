// Меню бургер
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('body--lock');
    iconMenu.classList.toggle('menu__icon--active');
    menuBody.classList.toggle('menu__body--active');
});

let teamSliderPoints = document.querySelectorAll('.team__menu-point');
let teamItem = document.querySelectorAll('.team__item');
let numberTeamItem = 3;

for (const item in teamItem) {
    if (item < 3) {
        teamItem[item].style = 'display: flex;';
    } else {
        teamItem[item].style = 'display: none;';
    }
}

for (const i in teamSliderPoints) {
    teamSliderPoints[i].onclick = function(){
        for (const item in teamItem) {
            if ((+i * numberTeamItem <= item) && (item < (+i + 1) * numberTeamItem)) {
                teamItem[item].style = 'display: flex;';
            } else {
                teamItem[item].style = 'display: none;';
            }
        }
        for (const point of teamSliderPoints) {
            point.classList.remove('team__menu-point--active');
        }
        teamSliderPoints[i].classList.add('team__menu-point--active');
    }
}