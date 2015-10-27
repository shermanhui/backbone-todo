
var ToDoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options){

		if (!(options && options.model)) {

			throw new Error("Model has not been specified.");

		}
	},

	render: function(){

		var source = $("#item-template").html();

		var template = _.template(source);

		this.$el.html(template(this.model.attributes)); // have to pass in model attributes or title is undefined!

		return this;

	}
});