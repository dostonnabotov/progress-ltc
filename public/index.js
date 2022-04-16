document.getElementById("year").innerHTML = new Date().getFullYear();
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContent, tablinks;
    // Get all elements with class="tab__content" and hide them
    tabContent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document
        .getElementById(tabName)
        .style
        .display = "block";
    evt.currentTarget.className += " active";
}