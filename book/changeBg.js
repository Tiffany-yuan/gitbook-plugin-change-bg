var gitbook = window.gitbook;
var options;
var imgUrls;
var time;
gitbook.events.bind('start', function (e, config){
    // Save config data
    options = config['change-bg'] || {};
    imgUrl = options.url;
});
var id;
gitbook.events.bind("page.change", function (){
    $("<div>").addClass("girls").prependTo($(".book-body"));

    $(".girls").css("backgroundImage", "url(" + imgUrls + ")");
});
