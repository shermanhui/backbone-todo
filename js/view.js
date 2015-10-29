
var ToDoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options){

		if (!(options && options.model)) {

			throw new Error("Model has not been specified.");

		}

		this.listenTo(this.model, "change", this.render);

	},

	render: function(){

		var source = $("#item-template").html();

		var template = _.template(source);


		this.$el.attr("id", this.model.id);

		this.$el.toggleClass("checked", this.model.get("completed"));

		this.$el.html(template(this.model.toJSON())); // have to pass in model attributes or title is undefined!

		this.$input = this.$(".edit"); // moved here or else we get an undefined value..

		return this;

	},

	events: {

		"click .toggle": "onClickToggle",

		"click .destroy": "onClickDelete",

		"click .editor": "onClickEdit",

		"keypress .edit": "updateOnEnter",

		"blur .edit": "close"

	},

	onClickToggle: function(){

		this.model.toggle(); // calls toggle method on item, to let model decide how to update the state

	},

	onClickDelete: function(){

		this.model.destroy();

	},

	onClickEdit : function(){

		this.$el.addClass("editing");

		this.$input.focus();

	},

	updateOnEnter: function(e){
		if (e.which == 13){
			this.close();
		}
	},

	close: function(){
		var value = this.$input.val();

		var trimmedVal = value.trim();

		if (trimmedVal) {

			this.model.save({title: trimmedVal});

		} else {

			this.clear();

		}

		this.$el.removeClass("editing");
	}
});