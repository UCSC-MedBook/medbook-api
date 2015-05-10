Package.describe({
  name: 'ucscmedbook:api',
  summary: 'Code shared by all MedBook Apps',
  version: '0.2.0',
  git: 'https://github.com/UCSC-MedBook/medbook-api.git'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.use('cfs:http-methods@0.0.27');

  api.addFiles([
    'server/genelist/genelist.js',
  ], 'server');



  api.addFiles([
    'img/select2.png',
  ],'client', {isAsset: true});


  api.addFiles([

    'client/genelist/genelist.html',
    'client/genelist/genelist.js',
    'client/genelist/genelist.css',
    'client/genelist/select2.css',
    'client/genelist/select2.js',

    'client/navigation/api-tests.js',
    'client/navigation/api.js',
    'client/navigation/navigator.css',
    'client/navigation/navigator.html',
    'client/navigation/navigator.js',
  ], 'client');
  api.export("MedBookNavigator", "client");
});
