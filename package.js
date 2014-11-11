Package.describe({
  name: 'ucsc-medbook:api',
  summary: ' MedBook API ',
  version: '0.0.1',
  git: 'https://github.com/ucsc-medbook/medbook-api.git'
});

Package.onUse(function(api) {
  api.use('http', ['client', 'server'])
  api.addFiles('api.js', ['client', 'server']);
  api.export(["MedBookPost", "ApiState"]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('api');
  api.addFiles('api-tests.js');
});
