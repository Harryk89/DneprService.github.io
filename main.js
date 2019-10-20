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

$("#mob_menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 50;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
    // animation();
    $('.mob_nav').toggleClass('open');
    $('.mob_btn_menu').toggleClass('active');
});

$(".mob_btn_menu").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.mob_nav').toggleClass('open');
});

if(($(window).scrollTop() + $(window).height()) > $('.banner').offset().top){
        $('.banner_desc').addClass('anim_end');
    } 

let a = 1;

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


$(function(){
    $('#agree').on('change', function(){
        if($('#agree').prop('checked')){
            $('#submit').attr('disabled', false);
        }else{
            $('#submit').attr('disabled', true);
        }
    });
});

console.log('111111-window--', ($(window).scrollTop() + $(window).height()))

$('#btn_form').on('click', function(e){
    e.preventDefault();
    trace('212121212121212121')
    // var fd = new FormData( $(modal_form) );
    var fd = $('#modal_form').serialize();
    // var fd = new FormData( this );
    $.ajax({
    url: 'send.php',
    type: 'POST',
    contentType: false, 
    processData: false,
    crossDomain: true,
    dataType: "json",
    data: fd,
    success: function(msg){
            if(msg == 'ok') {
                alert('Отправлено');
            } else {
                alert('Ошибка')
            }
        }
    });
});

