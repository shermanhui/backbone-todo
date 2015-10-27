
var ToDoItem = Backbone.Model.extend({

	defaults: {
		title: "",

		completed: false
	},

	validate: function(attrs){

		if (!attrs.title){

			return "Title Required";

		}
	},

	toggle: function(){ // handles the completed state of a to do item

		this.set("completed", !this.get("completed"));

	}

});