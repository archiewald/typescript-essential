console.log("Custom types");
{
    interface Todo {
        name: string; // types are optional within interface
        completed: boolean;    
        //completed?: boolean; // can be marked as optional with ?   
    }

    // interfaces are used only for compiled check. There is no representation in app.js!

    const todo: Todo = {
        name: "Pranko",
        completed: false,
    }

    // const todo = <Todo> {};
    // ^casting syntax!

    interface ITodoService {
        add(todo: Todo): Todo;
        // delete(todo: Todo): void;
        getAll(): Todo[];
        getById(todoId: number): Todo;
    }

    interface jQuery {
        (selector: string | any): HTMLElement;
        fn: any;
        version: number;
    }
    
    // using interface to describe functions
    
    var $ = <jQuery>function(selector: string) {
        // Find DOM element
    }
    
    $.version = 1.18
    
    var container = $("#container");
}