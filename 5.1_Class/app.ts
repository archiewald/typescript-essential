console.log("Define a class");
{
    class TodoService {
        // todos: Todo[];

        // constructor() {
        //     this.todos = []
        // }

        static lastId: number = 0;
        // ts will attach this variable to the constructor function
        // can be usefu; when you want to give a unique id to the instance

        constructor(private todos: Todo[]){

        }

        static getNextId(){
            return TodoService.lastId += 1;
        }

        add(todo: Todo){
            var newId = TodoService.getNextId;
        }


        getAll() {
            return this.todos
        }
    }

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

    class SmartTodo {
    
        _state: TodoState;
        
        name: string;
        
        get state() {
            return this._state;
        }
        
        set state(newState) {
            
            if(newState == TodoState.Complete) {
                
                var canBeCompleted = 
                    this.state == TodoState.Active
                    || this.state == TodoState.Deleted;
                    
                if(!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked Completed"
                }
            }
            
            this._state = newState;
        }
        
        constructor(name: string) {
            this.name = name;
        }
    }

    const todo = new SmartTodo("Zrob kursik")

    todo.state = TodoState.Active;
    todo.state = TodoState.Complete; // will not let you do this until its active or deleted!
    
}