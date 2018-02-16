$(document).ready(function() {
    var logcontent = $("#logcontent");
    var lineHeight = parseFloat(logcontent.css("line-height"));

    $(".btn").on("click", function() {
        if ($(this).hasClass("btn-up")) {
            logcontent.scrollTop(logcontent.scrollTop() - lineHeight);
        } else {
            logcontent.scrollTop(logcontent.scrollTop() + lineHeight);
        }
    });

    logcontent.on("mousewheel", function(event) {
        logcontent.scrollTop(logcontent.scrollTop() + lineHeight * -event.deltaY);
    });
});