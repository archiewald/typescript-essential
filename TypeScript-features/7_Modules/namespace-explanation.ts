namespace explanation {
    //the namespace is here just to avoid conflicts between other ts files.
    //here is explanation of compiled code from app.ts

    //TS namespace is a syntactic sugar to create IIFE. erything you write in namespace declaration
    //is kept in the scope unless you declare export keyword.

    //export attaches to the namespace object so it can be accessed anywhere in the application

    //enums and classes are declared using this pattern as well

    var TodoApp; // top level namespace global object
    (function (TodoApp) {
        var Model;
        (function (Model) {
            var TodoState;
            (function (TodoState) {
                TodoState[TodoState["New"] = 1] = "New";
                TodoState[TodoState["Active"] = 2] = "Active";
                TodoState[TodoState["Complete"] = 3] = "Complete";
                TodoState[TodoState["Deleted"] = 4] = "Deleted";
            })(TodoState = Model.TodoState || (Model.TodoState = {}));
        })(Model = TodoApp.Model || (TodoApp.Model = {}));
    })(TodoApp || (TodoApp = {})); // here IIFE is immediately invoked. 
    // if TodoApp already has a value use that, otherwise assign global variable to empty object

}
