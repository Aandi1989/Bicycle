$('.iconMenu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();

/*
Чистый JS ibg
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();
*/

// Swiper 
new Swiper('.swiper-container',{
    pagination:{
        el:'.swiper-pagination',
        clickable: true,

    },
    grabCursor: true,
    autoHeight:true,
})