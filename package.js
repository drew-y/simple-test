Package.describe({
  name: 'drewy:simple-test',
  version: '0.1.0',

  // Brief, one-line summary of the package.
  summary: 'Dead simple unit tests that aid in programming',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/drew-y/simple-test',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['ddp', 'grigio:babel']);
  api.addFiles('simple-test.es6.js');
  api.export(['tests', 'SimpleTest']);
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers']);
  api.use('drewy:simple-test');
  api.addFiles('simple-test-tests.js');
});
