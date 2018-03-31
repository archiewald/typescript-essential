console.log("Enums");
{
    interface Todo {
        name: string;
        state: TodoState;
    }

    enum TodoState {
        New = 1,
        Active = 2,
        Complete = 3,
        Deleted = 4,
    }
    
    const todo: Todo = {
        name: "Wash teeth",
        state: TodoState.New,
    };


    // what ts really does it creates object like this:
    // const TodoState = {
    //     1: "New",
    //     2: "Active",
    //     3: "Completed",
    //     4: "Deleted",
    //     New: 1,
    //     Active: 2,
    //     Completed: 3,
    //     Deleted: 4
    // }
    
    function deleteTodo(todo: Todo){ // notice you cant name it delete
        if(todo.state != TodoState.Complete) {
            throw "Can't delete incomplete task!"
        }
    }

    // anonymous types

    let todo2: {name: string}; // note you cant use const here

    // todo2 = {age: 41}
    // cant do this!

    function totalLength(x: { length: number }, y: { length: number }): number {
        // any object with property length which is a number can use this method
        var total: number = x.length + y.length;
        return total;
    }
    
}