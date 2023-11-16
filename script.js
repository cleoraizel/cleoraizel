$(window).scroll(function(){
    var wScroll = $(this).scrollTop()

    // $('.content').css({
    //     'transform' :  'translate (0, '+ wScroll/4 +'%)'
    // });

    $('.jar-content span').css({
        'transform' : 'translate(0, '+ wScroll/5 +'%)'
    })

    //     $('.jar-content img').css({
    //     'transform' : 'translate('+ wScroll +'%, 0)'
    // })
})


// portofoli landing page
$(window).on('load', function(){
    $('.inside-porto').addClass('muncul')

    $('.text').addClass('contmuncul')
    $('.image-content').addClass('imgmuncul')
} )