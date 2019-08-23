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

    // trace(' $(.advantages_block).offset()', $('.advantages_block').offset());
    // console.log('offset  :::', $(window).scrollTop());
    // let top =  $('.advantages_block').offset().top;
    // let windowTop =  $(window).scrollTop();
    // a -= 0.01;
    // // if (top - windowTop <= 150) {
    // //     trace('aaaa ::', a)
    // //     $('.advantages_block').css('opacity', `${a}`);
    // // } 
    // $('.advantages_block').each(function(i, element) {
    //     $(element).css('opacity', function() {
    //         let top =  $(this).offset().top;
    //         let b = 150 + 50*i;
    //         // let windowTop =  $(window).scrollTop();
    //             if (top - windowTop <= b ) {
    //                 trace('diff ::', i, top - windowTop)
    //                 return 0.2
    //             } 
    //     });
    // })
    // $('.advantages_block').css('opacity', function() {
    //     let top =  $(this).offset().top;
    //     // let windowTop =  $(window).scrollTop();
    //         if (top - windowTop <= 150) {
    //             return 0.2
    //         } 
    // });
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

// $('.label_price').click(function(e) {
// // $('.label_price').on('change', function(e) {
//     // e.preventDefault();
//     console.log('label_price checked', $(this));
//     console.log('label_price attr', $(this).attr('checked'));
//     console.log('label_price', $(this).prop('checked'));

//     if($(this).is(":checked")) {
//         console.log('checked');
//     }else{
//         console.log('NO checked');
//     }

//     // if($(this).prop('checked')){
//     //     console.log('checked');
//     // }else{
//     //     console.log('NO checked');
//     // }
// })


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
