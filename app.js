//Todo List App

//Version 10 Requirements

var todoList = {
	
	//store todos array in an object
	todos: [],
	
	//create add todo method
	addTodo: function(todo){
		this.todos.push(todo);
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
	},
	
	//todoList.changeTodo() should change todoText property
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
	},
	
	//create delete todo method
	deleteTodo: function(position){
		this.todos.splice(position, 1);
	},
	
	//todoList.toggleCompleted() should change the completed property
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;
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
	}
};

//Refactoring display todos and toggle all DOM methods

var handlers = {
	
	toggleAll: function(){
		todoList.toggleAll();
	},
	
	addTodo: function(){
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	
	changeTodo: function(){
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput = '';
		changeTodoTextInput = '';
		view.displayTodos();
	},
	
	deleteTodo: function(position){
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.value);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	
	//create an li element for every todo
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for(var i = 0; i < todoList.todos.length; i++){
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';
			
			if(todo.completed === true){
				todoTextWithCompletion = '[X] ' + todo.todoText;
			} else {
				todoTextWithCompletion = '[ ] ' + todo.todoText;
			}
			
			//each li should have an id as it's todo position 
			todoLi.id = i;
			//each li element should contain .todoText
			//each li element should show .completed
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
		
	},
	
	//there should be a delete button for each todo
	createDeleteButton: function(){
		
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
			
	},
	
	setUpEventListeners: function(){
		
		var todosUl = document.querySelector('ul');

		//delete button should have access to todo id
		todosUl.addEventListener('click', function(event){
		console.log(event.target.parentNode.id);
	
		var elementClicked = event.target;
			if(elementClicked.className === 'deleteButton'){
			handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();



