

$(document).ready(function () {
    var counter = 0;
    var myTitles = ["SOFTWARE ENGINEER", "BLOGGER", "TRAVELLER", "COFFEE ADDICT", "OPEN SOURCE GEEK"];
    var myTitle = document.getElementById("myTitle");

    setInterval(change, 1000);

    function change() {
        myTitle.innerHTML = myTitles[counter];
        counter++;
        if(counter >= myTitles.length) { counter = 0; }
    }
    }

);