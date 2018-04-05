{
    // array destructuring
    
    console.log("initial setup");
    const array = [123, "Artur", "Kozubek"];
    const [id, title, completed] = array;

    // easy values flip

    let a=1;
    let b=5;

    [a,b]=[b,a];

    // destructuring object

    const todo = {
        id1:12,
        title1:"whatever",
        completed1: "false"
    }

    const {id1, title1, completed1} = todo;
    // var id1 = todo_1.id1, title1 = todo_1.title1, completed1 = todo_1.completed1;

    function countdown(initial, final = 0, interval = 1) {
        let current= initial;

        while (current > final) {
            console.log(current);
            current -= interval;
        }
    
    }

    // use object as an argument
    function countdownWithOptions({
        initial,
        final: final = 0,
        interval = 1,
        initial: current
    }) {

        while (current > final) {
            console.log(current);
            current -= interval;
        }
    }
}