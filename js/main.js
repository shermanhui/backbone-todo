
$(document).ready(function(){
	var todoItem = new ToDoItem({ description: "Item 1"});

	var todoItemView = new ToDoItemView({ model: todoItem });
	$("body").append(todoItemView.render().$el);
});