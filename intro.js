// Variables
var head = "Hello World!"

// Functions
function on(e) {
    document.getElementById("h").innerHTML = this.innerHTML;
};
function off(e) {
    document.getElementById("h").innerHTML = head;
};
function kill(e) {
    this.remove();
    off(e);
};
function append(e) {
    var newItem = document.createElement("li");
    var l = document.getElementById("thelist");
    l.appendChild(newItem);
    newItem.innerHTML = "New Thing!";
    newItem.addEventListener("mouseover", on);
    newItem.addEventListener("mouseout", off);
    newItem.addEventListener("click", kill);
};

// Adding Event Listeners
var l = document.getElementsByTagName("li");
for (var i = 0; i < l.length; i++) {
    l[i].addEventListener("mouseover", on);
    l[i].addEventListener("mouseout", off);
    l[i].addEventListener("click", kill);
};

var b = document.getElementById("b");
b.addEventListener("click", append);
