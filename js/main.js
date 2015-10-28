
$(document).ready(function(){

	var toDoItems = new ToDoItems();

	toDoItems.fetch();

	var toDoItemsView = new ToDoItemsView({ model: toDoItems});

	$("body").append(toDoItemsView.render().$el);
});