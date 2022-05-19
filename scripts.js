if (screenWidth > mobileBreakpoint) {
    globalNavbar.classlist.add("open");
    toggle.classList.add("open");
}

//Add a toggle click function
toggle.onclick = function() {
    if (globalNavbar.classlist.contains("open")) {
        globalNavbar.classlist.remove("open");
        toggle.classList.remove("open");
    }
    else {
        globalNavbar.classlist.add("open");
        toggle.classList.add("add");
    }
}

window.onresize = function() {
    var screenWWidth = window.innerWidth;

    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenwidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    else {
        globalNavbar.classList.remove("open");
        toggle.classList.remove("open");
    }
}