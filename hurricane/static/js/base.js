// window.addEventListener("load", function() {
//     console.log("Hello");
//     window.addEventListener("scroll", scrollHandler);
// });
//
// function scrollHandler(event) {
//
//     var logline = document.querySelectorAll(".logline")[0];
//
//     fontSize = parseFloat(getComputedStyle(logline).fontSize);
//     document.body.scrollBy(0, fontSize);
//     console.log(fontSize);
// }

$(document).ready(function() {
    $(".btn").on("click", function() {
        var logcontent = $("#logcontent");
        if ($(this).hasClass("btn-up")) {
            console.log("up");
            logcontent.scrollTop(logcontent.scrollTop() - 16);
        } else {
            logcontent.scrollTop(logcontent.scrollTop() + 16);
            console.log("down");
        }
    });
});