// Variables
var head = "Hello World!"
var fib1 = 0;
var fib2 = 1;

// Functions
function on(e) {
    document.getElementById("h").innerHTML = this.innerHTML;
};
function off(e) {
    document.getElementById("h").innerHTML = head;
};
function kill(e) {
    this.remove();
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
function addFib(e) {
    var newItem = document.createElement("li");
    var l = document.getElementById("fiblist");
    l.appendChild(newItem);
    newItem.innerHTML = fib2;
    var fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
}

// Adding Event Listeners
var l = document.getElementsByTagName("li");
for (var i = 0; i < l.length; i++) {
    l[i].addEventListener("mouseover", on);
    l[i].addEventListener("mouseout", off);
    l[i].addEventListener("click", kill);
};

var b = document.getElementById("b");
b.addEventListener("click", append);

var fib_button = document.getElementById("fibb");
fib_button.addEventListener("click", addFib);
