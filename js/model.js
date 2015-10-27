
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

	toggle: function(){

		this.save({

			completed: !this.get('completed')

		});
	}


});