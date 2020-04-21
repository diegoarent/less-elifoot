/* for testing purposes only */

document.addEventListener("DOMContentLoaded", function (event) {
    let teams = document.querySelectorAll(".team");

    for (let t = 0; t < teams.length; t++) {
        // Black background = black border
        // Darkblue background = black border
        // Red background and white font = black border
        // Blue background and white font = black border
        if (
            getStyle(teams[t], "backgroundColor") === "rgb(0, 0, 0)" ||
            getStyle(teams[t], "backgroundColor") === "rgb(0, 0, 139)" ||
            (getStyle(teams[t], "backgroundColor") === "rgb(255, 0, 0)" &&
                getStyle(teams[t], "color") === "rgb(255, 255, 255)") ||
            (getStyle(teams[t], "backgroundColor") === "rgb(0, 0, 255)" &&
                getStyle(teams[t], "color") === "rgb(255, 255, 255)")
        ) {
            teams[t].style.borderColor = "black";
        }

        // green font = border as same background color
        if (getStyle(teams[t], "color") === "rgb(0, 128, 0)") {
            teams[t].style.borderColor = getStyle(teams[t], "backgroundColor");
        }
    }
});

function getStyle(el, styleProp) {
    if (el.currentStyle) return el.currentStyle[styleProp];

    return document.defaultView.getComputedStyle(el, null)[styleProp];
}
