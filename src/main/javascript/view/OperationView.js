'use strict';

SwaggerUi.Views.OperationView = Backbone.View.extend({
  invocationUrl: null,

  events: {
    'click .toggleOperation'  : 'toggleOperationContent',
  },

  initialize: function(opts) {
    opts = opts || {};
    this.parentId = this.model.parentId;
    this.nickname = this.model.nickname;
    this.model.encodedParentId = encodeURIComponent(this.parentId);

    return this;
  },


  // Note: copied from CoffeeScript compiled file
  // TODO: refactor
  render: function() {
    $(this.el).html(Handlebars.templates.operation(this.model));
    return this;
  },


  toggleOperationContent: function (event) {
    event.preventDefault();
    var elem = $('#' + Docs.escapeResourceName(this.parentId + '_' + this.nickname + '_data'));
    $('html, body').animate({ scrollTop: elem.offset().top }, 500);
    // if (elem.is(':visible')){
    //   $.bbq.pushState('#/', 2);
    //   Docs.collapseOperation(elem);
    // } else {
    //   Docs.expandOperation(elem);
    // }
  },

});
