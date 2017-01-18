/**
 * Created by admin on 2017/1/18.
 */
$(function () {
    refreshNews();
})

function refreshNews(){
    var _lists = $("article ul.news-lists");
    _lists.empty();
    $.ajax({
        url:'./server/getnews.php',
        type:'get',
        dataType:'json',
        success:function(data){
            console.log(data);
            var _list = $("<li></li>").addClass("news-list").prependTo(_lists);
            var _newImg = $("<div></div>").addClass("newsimg").appendTo(_list);
            var _img = $("<img>").attr("src",data.newsimg).appendTo(_newImg);
            var _newContent = $("<div></div>").addClass("newscontent").appendTo(_list);
            var _h1 = $("<h1></h1>").html(data.newstitle).appendTo(_newContent);
            var _p = $("<p></p>").appendTo(_newContent);
            var _newstime = $("<span></span>").addClass("newstime").html(data.newstime).appendTo(_p);
            var _newssrc = $("<span></span>").addClass("newssrc").html(data.newssrc).appendTo(_p);
        }
    })

}