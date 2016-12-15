function on(e) {
    console.log(e);
    console.log(this);
};
function off(e) {
    console.log(e);
    console.log(this);
};

var l = document.getElementsByTagName("li")
for (var i = 0; i < l.length; i++) {
    addEventListener("mouseover", on);
    addEventListener("mouseoff", off);
};
