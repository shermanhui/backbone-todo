
var ToDoItem = Backbone.Model.extend({

	defaults: {

		title: "New To Do",

		completed: false
	},

	validate: function(attrs){

		if (!attrs.title){

			return "Title Required";

		} else if (!attrs.id) {

			return "Id Required"

		} else if (!attrs.completed){

			return "Status required"

		}
	},

	toggle: function(){ // handles the completed state of a to do item

		this.save("completed", !this.get("completed")); // use save to activate PUT request, .set doesn't do that

	}

});