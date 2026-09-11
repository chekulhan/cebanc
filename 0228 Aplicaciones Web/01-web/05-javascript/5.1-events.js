var btn = document.getElementById("button1");

btn.addEventListener("click", doClickEvent);

// Version 1
function doClickEvent() {
    console.log("clicking");
}

// Version 2
function doClickEvent(e) {
    console.log("clicking");
    console.log(e.target.value);
}

// Version 3
btn.addEventListener("click", function() {
    console.log("Event 2");
});

// Version 4
btn.addEventListener("click", function(e) {
    console.log("Event 3");
});
