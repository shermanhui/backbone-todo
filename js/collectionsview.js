
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
		"keypress #newToDo": "onEnter"
	},

	onEnter: function(e){ // handles DOM events
		if (e.keyCode == 13){

			var $inputText = this.$('#newToDo');

			if ($inputText.val()){
				var toDoItem = new ToDoItem({ title: $inputText.val()});

				this.model.add(toDoItem);

				$inputText.val(""); // clears input after "Add"
			}
		}
	},

	render: function(){
		var self = this;

		var source = $("#input-template").html();

		var template = _.template(source);

		this.$el.html(template);

		this.model.each(function(toDoItem){

			var view = new ToDoItemView({model: toDoItem});

			self.$el.append(view.render().$el);

		});

		return this;
	}
});