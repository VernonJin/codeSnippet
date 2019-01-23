/*
* 本文主要收藏常用的事件，动画方法
* */

//回车事件触发的代码

$(function(){
    $('#username').focus();
    //回车查询
    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {
            $("#signIn").trigger('click');
        }
    };
});


