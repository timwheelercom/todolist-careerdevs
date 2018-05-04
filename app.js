//Todo List App

//Version 5 Requirements

var todoList = {
	
	//store todos array in an object
	todos: [],
	
	//.displayTodos should show .todoText
	//.displayTodos should tell you if .todos is empty
	//.displayTodos should show .completed
	displayTodos: function(){
		if(this.todos.length === 0){
			console.log('Your todo list is empty!')
		} else {
			for(var i = 0; i < this.todos.length; i++){
				if(this.todos[i].completed === true){
					console.log('[X]', this.todos[i].todoText);
				} else {
					console.log('[ ]', this.todos[i].todoText);
				}
			}
		}
	},
	
	//create add todo method
	addTodo: function(todo){
		this.todos.push(todo);
		this.displayTodos();
	},
	
	//create change todo method
	changeTodo: function(position, newValue){
		this.todos[position] = newValue;
	},

	//todoList.addTodo() should add objects
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	
	//todoList.changeTodo() should change todoText property
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	
	//create delete todo method
	deleteTodo: function(position){
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	
	//todoList.toggleCompleted() should change the completed property
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
	
	
}



