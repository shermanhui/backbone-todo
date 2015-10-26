
var ToDoItemsView = Backbone.View.extend({
	tagName: "ul",

	render: function(){
		var self = this;

		this.model.each(function(toDoItem){

			var view = new ToDoItemView({model: toDoItem});

			self.$el.append(view.render().$el);

		});

		return this;
	}
});