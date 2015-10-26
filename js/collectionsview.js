
var ToDoItemsView = Backbone.View.extend({
	tagName: "ul",

	id: "todoItems",

	initialize: function(options){
		if (!(options && options.model)){
			throw new Error ("Mode is not specified!");
		}

		this.model.on("add", this.onAddToDoItem, this);
	},

	onAddToDoItem: function(toDoItem){ // handles Collections Events
		var view = new ToDoItemView({ model: toDoItem});
		this.$el.append(view.render().$el);
	},

	events: { // handles DOM events
		"click #add": "onClickAdd"
	},

	onClickAdd: function(){ // handles DOM events
		var toDoItem = new ToDoItem({ description: "new item"});
		this.model.add(toDoItem);
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