/* global AutoForm, $ */

AutoForm.addInputType("genelist", {
  template: "genelist",
  valueConverters: {
    "stringArray": function (val) {
      return val;
    },
  }
});

Template.genelist.helpers({
   'change #genelist' : function(evt, tmpl) {
       var $genelist = tmpl.find("input");
       debugger;
   },
});

Template.genelist.rendered = function () {
     debugger;
     var data = this.data;
     var $genelist = this.find("input");
     $genelist.select2({
          initSelection : function (element, callback) {
            if (data)
                callback( data.map(function(g) { return { id: g, text: g }}) );
          },
          multiple: true,
          ajax: {
            url: "/fusion/genes",
            dataType: 'json',
            delay: 250,
            data: function (term) {
              var qp = {
                q: term
              };
              return qp;
            },
            results: function (data, page, query) { return { results: data.items }; },
            cache: true
          },
          escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
          minimumInputLength: 2,
     });

     /*
     if (prev && prev.genelist) {
         $genelist.select2("val", prev.genelist );
     }
     */
};

Template.genelist.destroyed = function () {
};

