var container = document.getElementById('container');
// using typescript literals
var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};
container.innerHTML = "\n<div todo='" + todo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (todo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">" + todo.name + "</span>\n</div>\n";
var container = document.getElementById('container');
// let and const
for (var x = 0; x <= 5; x++) {
    var counter = x;
    //counter = 1;
}
// console.log(counter); // not accessible!
// for...of loop
var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
array.map(function (x) { return console.log(x); });
// freaking .this example and lambda functions
var container2 = document.getElementById('counter');
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    // oldschool way to fix .this issue
    // let that=this;
    // el.addEventListener('click',
    //     function (event) {
    //         that.count += 1;
    //         el.innerHTML=that.count;
    //     } 
    // new school - lambda functions! it does the same for you :)
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container2);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
//# sourceMappingURL=app.js.map