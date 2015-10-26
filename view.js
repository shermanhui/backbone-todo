
var ToDoItemView = Backbone.View.extend({
	initialize: function(options){
		if (!(options && options.model)) {
			throw new Error("Model has not been specified.");
		}
	},

	render: function(){
		this.$el.html(this.model.get("description"));

		return this;
	}
})