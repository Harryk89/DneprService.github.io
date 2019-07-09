$("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
    // animation();
});

if(($(window).scrollTop() + $(window).height()) > $('.banner').offset().top){
        $('.banner_desc').addClass('anim_end');
    } 

$(window).scroll(function(){
    if(($(window).scrollTop() + $(window).height()) > $('.about').offset().top){
        $('.about_desc').addClass('anim_end');
    }
    if(($(window).scrollTop() + $(window).height()) > $('.callback').offset().top){
        $('.callback_desc').addClass('anim_end');
    }
    if(($(window).scrollTop() + $(window).height()) > $('.zakaz_parts').offset().top){
        $('.zakaz_desc').addClass('anim_end');
    }
})

$('.modal_back').hide();

$('button').click(function(e) {
    e.preventDefault();
    $('.modal_back').show();
});

$('#close').click(function(e) {
    e.preventDefault();
    $('.modal_back').hide();
})

console.log('111111-window--', ($(window).scrollTop() + $(window).height()))
console.log('offset  :::', $('.about_desc').offset().top)