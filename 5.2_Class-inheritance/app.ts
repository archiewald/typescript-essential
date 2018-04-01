console.log("class inheritance");
{   
    interface Todo {
        name: string;
        state: TodoState;
    }
    
    enum TodoState {
        New = 1,
        Active,
        Complete,
        Deleted
    }

    abstract class TodoStateChanger { // state machine
    
        constructor(private newState: TodoState) {
        }
        
        abstract canChangeState(todo: Todo): boolean;
        // we force every derived class to implement own canChangeState method
        // if no canChangeState was implemented, ts will throw an error

        changeState(todo: Todo): Todo {
            if(this.canChangeState(todo)) {
                todo.state = this.newState;
            }
            
            return todo;
        }
        
    }

    // we define below how completed todo can be changed
    class CompleteTodoStateChanger extends TodoStateChanger { // CompleteTodoStateChanger has all properties of ToDoStateChanger class
        // constructor is inherited as well!
        constructor() { // constructors from derived class must contain a super call
            super(TodoState.Complete)
        }

        canChangeState(todo: Todo): boolean {
            // super.canChangeState is no longer needed
            return todo!! && (
                todo.state == TodoState.Active //can be changed only if is Active or Deleted
             || todo.state == TodoState.Deleted
          )
        }
    }
    
}