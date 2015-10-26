
var ToDoItemsView = Backbone.View.extend({
	tagName: "ul",

	id: "todoItems",

	initialize: function(options){
		if (!(options && options.model)){
			throw new Error ("Mode is not specified!");
		}
	},

	events: {
		"click #add": "onClickAdd"
	},

	onClickAdd: function(){
		console.log("Added")
	},

	render: function(){
		var self = this;

		var source = $("#addTemplate").html();
		var template = _.template(source);

		this.$el.html(template);

		this.model.each(function(toDoItem){

			var view = new ToDoItemView({model: toDoItem});

			self.$el.append(view.render().$el);

		});

		return this;
	}
});