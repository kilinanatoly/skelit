$(document).ready(function () {
    $(document).on('click', '.header-burger', function () {
        $('body').toggleClass("state-menu");
        return false;
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header1__inner-bar-menu"); // тут указываем ID элемента
        var di2 = $(".header-burger"); // тут указываем ID элемента
        if ((!div.is(e.target) && div.has(e.target).length === 0) && (!div2.is(e.target) && div2.has(e.target).length === 0)) {
            if ($('body').hasClass('state-menu')){
                $('body').removeClass('state-menu');
            }
        }
    });
});