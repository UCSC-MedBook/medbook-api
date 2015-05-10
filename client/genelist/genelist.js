/* global AutoForm, $ */

AutoForm.addInputType("genelist", {
  template: "genelist",
  valueOut: function () {
     debugger;
     return;
  },
  valueConverters: {
    "object": function (val) {
      debugger;
      return val;
    },
    "Object": function (val) {
      debugger;
      return val;
    },
    "string": function (val) {
      debugger;
      return val;
    },
    "stringArray": function (val) {
      debugger;
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

AutoForm.addHooks(null, {
    formToDoc: function(doc)  {
       debugger;
       var raw = $(".genelist").select2("val");
       doc.Mutated_Genes = raw;
       return doc;
    },
    docToForm: function(doc)  {
     var data = doc.Mutated_Genes;
     $(".genelist").select2("data", data.map(function(e) {return { id: e, text: e}}));

     /*
     $('.genelist').select2({
          initSelection : function (element, callback) {
            debugger
            if (data)
                callback( data.map(function(g) { return { id: g, text: g }}) );
          }
      });
      */
      return doc;
    }
});

Template.genelist.rendered = function () {
     var thisTemplate = this;;
     thisTemplate.$genelist = $(this.find("input"));

     var absUrl = Meteor.absoluteUrl();
     var whichApp = absUrl.substring(absUrl.lastIndexOf("/", absUrl.length -2));
     var url = whichApp + "genes";

     debugger;
     thisTemplate.$genelist.select2({
          initSelection : function (element, callback) {
            var data = Template.currentData().value;
            debugger
            if (data)
                callback( data.map(function(g) { return { id: g, text: g }}) );
          },
          multiple: true,
          ajax: {
            url:  url,
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

