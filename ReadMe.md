
## get fake products

## Installation

    npm install todo_list


## Usage

For use todo_list

```js
var todo = require('./index.js');

todo.addTodo({idAss:5, description:"Andare a lavorare Domani"});
todo.getAllTodo();
todo.deleteTodo(1);
todo.editTodo(1, 2,true);
todo.viewTodoStart();
todo.viewTodoEnd();

// for use editTodo you have to invoke the client function: editTodo(this.client(1),2,true);
//or example: editTodo(this.client(1),2,false);
```
