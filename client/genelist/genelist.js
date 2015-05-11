/* global AutoForm, $ */

AutoForm.addInputType("genelist", {
  template: "genelist",
  valueConverters: {
    "object": function (val) {
      return val;
    },
    "Object": function (val) {
      return val;
    },
    "string": function (val) {
      return val;
    },
    "stringArray": function (val) {
      return val;
    },
  }
});

Template.genelist.helpers({
   'change #genelist' : function(evt, tmpl) {
       var $genelist = tmpl.find("input");
   },
});

AutoForm.addHooks("CRFquickForm", {
    formToDoc: function(doc, ss)  {

       $(".genelist").each(function(i,element) {
           var fieldName = $(element).attr("prop")
           if (fieldName) {
              var raw = $(element).select2("val");
              doc[fieldName] = raw;
           }
       });

       return doc;
    },

    docToForm: function(doc, ss)  {

       $(".genelist").each(function(i,element) {
           var fieldName = $(element).attr("prop")
           if (fieldName) {
              var data = doc[fieldName];
              if (data == null)
                  $(element).select2("data", null);
              else
                  $(element).select2("data", data.map(function(e) {return { id: e, text: e}}));
           }
       });
      return doc;
    }
});

Template.genelist.rendered = function () {
     var thisTemplate = this;;
     thisTemplate.$genelist = $(this.find("input"));
     thisTemplate.$genelist.attr("prop", thisTemplate.data.name);

     var absUrl = Meteor.absoluteUrl();
     var whichApp = absUrl.substring(absUrl.lastIndexOf("/", absUrl.length -2));
     var url = whichApp + "genes";

     thisTemplate.$genelist.select2({
          initSelection : function (element, callback) {
            var data = Template.currentData().value;
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

