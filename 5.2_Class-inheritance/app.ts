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

    class TodoStateChanger { // state machine
    
        constructor(private newState: TodoState) {
        }
        
        canChangeState(todo: Todo): boolean {
            // can todo be changed?
            return !!todo; // yes, if exists
        }
        
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
            // super is the base class object
            // let you use base class methods though they are overridden
            return super.canChangeState(todo) && (
                todo.state == TodoState.Active //can be changed only if is Active or Deleted
             || todo.state == TodoState.Deleted
          )
        }
    }
    
}