
var ToDoItems = Backbone.Firebase.Collection.extend({

	model: ToDoItem,

	url: "https://fiery-fire-3787.firebaseio.com"

});