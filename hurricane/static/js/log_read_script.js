$(document).ready(function() {
    var logcontent = $("#logcontent");
    var lineHeight = parseFloat(logcontent.css("line-height"));
    var SKIP_LINES = 5;

    $(".btn").on("click", function() {
        if ($(this).hasClass("btn-up")) {
            logcontent.scrollTop(logcontent.scrollTop() - lineHeight * SKIP_LINES);
        } else {
            logcontent.scrollTop(logcontent.scrollTop() + lineHeight * SKIP_LINES);
        }
    });

    $(document).on("keydown", function(event) {
        switch(event.which) {
            case 38:
                logcontent.scrollTop(logcontent.scrollTop() - lineHeight * SKIP_LINES);
                break;
            case 40:
                logcontent.scrollTop(logcontent.scrollTop() + lineHeight * SKIP_LINES);
                break;
            default:
                return;
        }
    });

    logcontent.on("mousewheel", function(event) {
        logcontent.scrollTop(logcontent.scrollTop() + lineHeight * -event.deltaY);
    });
});