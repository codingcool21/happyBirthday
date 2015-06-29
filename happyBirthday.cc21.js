/*Codingcool21's library for HappyBirthday animation:*/
function checkIfJqueryIsAvailable() {
    if (typeof jQuery == undefined) {
        return false;
    } else {
        return true;
    }
}
var HappyBirthday = function(birthdayName, birthdayAge, birthdayAudio) {
    this.jqueryPresent = checkIfJqueryIsAvailable();
    if (!this.jqueryPresent) {
        //alert("jQuery not there!");
        //console.error("jQuery not available. happyBirthday is not supported!");
        throw "error: jQuery is required to include the happyBirthday library.";
        //this = undefined;
        return false;
    }
    this.animateBackgroundColor = function(object, color, time) {
        $(object).animate({
            "backgroundColor": color
        }, time);
    }
    this.animateGrowObject = function(object, px, time) {
        $(object).animate({
            "width": "+=" + px,
            "height": "+=" + px
        }, time);
    }
}
