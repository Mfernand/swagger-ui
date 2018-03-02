'use strict';

SwaggerUi.Views.TryApiView = Backbone.View.extend({

	initialize: function(){
		Handlebars.registerHelper('isArray', function(param, opts) {
			var paramType = param.type && param.type.toLowerCase();
			if (paramType === 'array' || param.allowMultiple) {
				return opts.fn(this);
			} else {
				return opts.inverse(this);
			}
		});
	},

	render: function() {
		$(this.el).html(Handlebars.templates.param_ta(this.model));
		return this;
	}

});