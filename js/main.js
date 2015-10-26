
$(document).ready(function(){
	var todoItems = new ToDoItems([
		new ToDoItem({description: "Item 1"}),
		new ToDoItem({description: "Item 2"})
		]);

	var todoItemsView = new ToDoItemsView({ model: todoItems});
	$("body").append(todoItemsView.render().$el);
});