var container = document.getElementById('container');

// using typescript literals

var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
}

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`

var container = document.getElementById('container');

// let and const

for (var x = 0; x <= 5; x++) {
    let counter = x;
    //counter = 1;
}
// console.log(counter); // not accessible!

// for...of loop

var array = [
    "Pick up drycleaning", 
    "Clean Batcave", 
    "Save Gotham"
];

for (var value of array) {
    console.log(value);
}

array.map( x => console.log(x))

