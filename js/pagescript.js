new fullpage('#fullpage', {
    autoScrolling: true,
    scrollVertically: true,
    // anchors: ['HOME', 'ABOUT', 'ABOUT', 'COMINGSOON'],


    // onLeave: function (origin, destination, direction) {
    //     var leavingSection = this;

    //     //after leaving section 2
    //     if (origin.index == 0 && direction == 'down') {

    //     } else if (origin.index == 1 && direction == 'up') {
    //         alert("Going to section 1!");
    //     }
    // }
})

// document.getElementById("body").addEventListener("onload", function () {
// var screenWidth = screen.width
// if (screenWidth < 440) {
//     console.log("hello");
// console.log(screen.width)
// }
// })

window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    var screenWidth = screen.width
    if (screenWidth < 440) {
        $(".hideonsmallscreen").css("display", "none");
        $(".navbar").css("display", "none");
    } else {
        $(".hideonbiggerscreen").remove();

    }
});