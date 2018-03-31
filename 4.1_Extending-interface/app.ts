console.log("Extending interface");
{
    const $ = <jQuery>function(selector: string) {
        // Find DOM element
    }
    
    $.version = 1.18;
    
    
    interface Todo {
        name: string;
        completed?: boolean;
    }
    
    interface jQuery {
        (selector: (string | any)): jQueryElement;
        fn: any;
        version: number;
    }
    
    interface jQueryElement {
        data(name: string): any;
        data(name: string, data: any): jQueryElement;
    }

    // assuming I want to add new methods to 3rd party library I can simply
    // define second interface with the same name, it will add new properties
    // not override!
    
    interface jQueryElement {
        todo(): Todo;
        todo(todo: Todo): jQueryElement;
    }
    
    $.fn.todo = function(todo?: Todo): Todo {
        
        if(todo) {
            $(this).data('todo', todo)
        } else {
            return $(this).data('todo');
        }
        
    }
    
    const todo = { name: "Pick up drycleaning" };
    const container = $('#container');
    container.data('todo', todo)
    const savedTodo = container.data('todo');
    
    container.todo(todo)
}