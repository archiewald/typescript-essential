{
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

// freaking .this example and lambda functions

var container2 = document.getElementById('counter');

function Counter(el) {

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

    el.addEventListener('click',
        () => {
            this.count += 1;
            el.innerHTML=this.count;
        }
    )
}

new Counter(container2);

var filtered = [1,2,3].filter(x => x > 0)
}