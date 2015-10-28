
var ToDoItem = Backbone.Model.extend({

	defaults: {
		title: "",

		completed: false
	},

	urlRoot: "http://jsonplaceholder.typicode.com/todos",

	validate: function(attrs){

		if (!attrs.title){

			return "Title Required";

		}
	},

	toggle: function(){ // handles the completed state of a to do item

		this.save("completed", !this.get("completed")); // use save to activate PUT request, .set doesn't do that

	}

});