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
    $(window).on("scroll", function(evt) {
        console.dir(evt);
    });
});