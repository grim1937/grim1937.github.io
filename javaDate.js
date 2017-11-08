// JavaScript source code

// this function gets the date
function renderTime() {
    // Date
    var mydate = new Date();
    var year = mydate.getYear();
        if (year < 1000) {
            year += 1900;
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    // Date End

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + montharray[month] + " " + daym + " " + dayarray[day] + " " + year;
    myClock.innerText = "" + montharray[month] + " " + daym + " " + dayarray[day] + " " + year;

    setTimeout("renderTime()", 1000);
}
renderTime();