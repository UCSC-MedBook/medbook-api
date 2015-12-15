Package.describe({
  name: 'medbook:api',
  summary: 'Code shared by all MedBook Apps',
  version: '0.2.5',
  // version 0.2.5 is same as 0.2.4 except publish with:
  // meteor publish --release METEOR@1.1.0.3
  // This is to avoid problems with pseudo-package isobuild:isopack-2.
  // 0.2.5 of this package is compatible with meteor pre-1.2.
  git: 'https://github.com/UCSC-MedBook/medbook-api.git'
});

Package.onUse(function(api) {
  // api.use('templating@1.0.0');
  // api.use('blaze@2.0.0');
  // api.use('aldeed:autoform@4.0.0');
  // api.use('cfs:http-methods@0.0.27');

  api.use(['natestrauser:select2@4.0.0_1', 'templating@1.0.0', 'blaze@2.0.0', 'aldeed:autoform@4.0.0', 'cfs:http-methods@0.0.27']);

  api.addFiles([
    'server/genelist/genelist.js',
  ], 'server');



  // api.addFiles([
    // 'img/select2.png',
  // ],'client', {isAsset: true});


  api.addFiles([

    'client/genelist/genelist.html',
    'client/genelist/genelist.js',
    'client/genelist/genelist.css',
    // 'client/genelist/select2.css',
    // 'client/genelist/select2.js',

    'client/navigation/api-tests.js',
    'client/navigation/api.js',
    'client/navigation/navigator.css',
    'client/navigation/navigator.html',
    'client/navigation/navigator.js',
  ], 'client');
  api.export(["MedBookNavigator", "genelist", "GeneList_docToForm", "GeneList_formToDoc"], "client");
  // api.export(["MedBookNavigator"], "client");

});
