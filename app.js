//Todo List App

//Version 7 Requirements

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
			console.log('My Todos: ')
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
	},
	
	toggleAll: function(){
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		
		for(var i = 0; i < totalTodos; i++){
			if(this.todos[i].completed === true){
				completedTodos++;
			}
		}
		
		if(completedTodos === totalTodos){
			for(var i = 0; i < totalTodos; i++){
				this.todos[i].completed = false;
			}
		} else {
			for(var i = 0; i < totalTodos; i++){
				this.todos[i].completed = true;
			}
		}
		
		this.displayTodos();
	}
};

//Refactoring display todos and toggle all DOM methods

var handlers = {
	
	displayTodos: function(){
		todoList.displayTodos();
	},
	
	toggleAll: function(){
		todoList.toggleAll();
	},
	
	addTodo: function(){
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	
	changeTodo: function(){
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput = '';
		changeTodoTextInput = '';
	},
	
	deleteTodo: function(){
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.value);
		deleteTodoPositionInput.value = '';
	},
	
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.value);
		toggleCompletedPositionInput.value = '';
	}
}


