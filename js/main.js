
$(document).ready(function(){

	var toDoItems = new ToDoItems([

		new ToDoItem({title: "Item 1", completed: false}),

		new ToDoItem({title: "Item 2", completed: false})

		]);

	var toDoItemsView = new ToDoItemsView({ model: toDoItems});

	$("body").append(toDoItemsView.render().$el);
});