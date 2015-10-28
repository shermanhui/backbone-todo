
var ToDoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options){

		if (!(options && options.model)) {

			throw new Error("Model has not been specified.");

		}

		this.listenTo(this.model, "change", this.render);
	},

	events: {

		"click .toggle": "onClickToggle",
		"click .destroy": "onClickDelete"

	},

	onClickToggle: function(){

		this.model.toggle(); // calls toggle method on item, to let model decide how to update the state

		console.log(this.model.toJSON());
	},

	onClickDelete: function(){

		this.model.destroy();

	},

	render: function(){

		var source = $("#item-template").html();

		var template = _.template(source);

		this.$el.toggleClass("checked", this.model.get("completed"));
		this.$el.html(template(this.model.attributes)); // have to pass in model attributes or title is undefined!

		return this;

	}
});