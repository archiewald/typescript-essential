{
    interface IIdGenerator {
        nextId: number;
    }
    
    class TodoService implements ITodoService, IIdGenerator {
        // ts will throw an error until all the ITodoService and IIdGenerator members are defined
        private static _lastId: number = 0;
    
        get nextId() {
            return TodoService._lastId += 1;
        }
    
        constructor(private todos: Todo[]) {
        }
    
        add(todo: Todo): Todo {
            todo.id = this.nextId;
            
            this.todos.push(todo);
            
            return todo;
        }
        
        delete(todoId: number): void {
            var toDelete = this.getById(todoId);
            
            var deletedIndex = this.todos.indexOf(toDelete);
            
            this.todos.splice(deletedIndex, 1);
        }
    
        getAll(): Todo[] {
            var clone = JSON.stringify(this.todos);
            return JSON.parse(clone);
        }
        
        getById(todoId: number): Todo {
            var filtered = 
                this.todos.filter(x => x.id == todoId);
                
            if( filtered.length ) {
                return filtered[0];
            }
            
            return null;
        }
    }

    const todo = new TodoService ([
        {
            id: 1,
            name: "Make a laundry",
            state: TodoState.New,
        },
        {
            id: 2,
            name: "Do your job",
            state: TodoState.Active,
        },
    ]);

    console.log(todo.getAll());
    todo.add({
        id: 3,
        name: "Make it work",
        state: TodoState.Active,
    });
    console.log(todo.getById(3));
    todo.delete(2);
    console.log(todo.getAll());
}