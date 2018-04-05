console.log("prototypal inheritance");
{
    // Perhaps the most common way that JavaScript assigns a prototype to an object
    // is with a constructor which is really just a function that is called with the
    // new keyword. When you initialize an object with a new keyword, JavaScript does three things.
    // First, it creates a new object. Second, it sets the new object's prototype to the constructor
    // function's prototype. Third, it executes the function that you called with the new keyword,
    // referring to the new object as this within that method.

    function TodoService() { //acts as a constructor function
        this.todos = [];
        this.name = "Pablo";
        this.getName = function () {
            return this.name;
        }
        // In a constructor function this does not have a value. It is a substitute for the new object.
        // The value of this will become the new object when a new object is created.
    }
    
    TodoService.prototype.getAll = function() {
        return this.todos; // it access todos array we defined above
    }
    
    const service = new TodoService();
    service.getAll();
    service.getName();
}