Tinytest.add('Tests are empty on init', function(test) {
  console.log(SimpleTest);
  test.equal(tests.passed, 0);
  test.equal(tests.failed, 0);
  test.equal(tests.total, 0);
});

Tinytest.add('Tests properly fail', function(test) {
  var five = 5;
  tests.assert(five === 4);
  test.equal(tests.failed, 1);
  tests.reset();
});

Tinytest.add('Tests properly pass', function(test) {
  var five = 5;
  tests.assert(five === 5);
  test.equal(tests.passed, 1);
  tests.reset();
});

Tinytest.add('Tests total is correct', function(test) {
  var five = 5;
  tests.assert(five === 5);
  test.equal(tests.total, 1);
  tests.reset();
});

Tinytest.add('Tests properly reset', function(test) {
  var five = 5;
  tests.assert(five === 5);
  tests.assert(five === 52);
  test.equal(tests.passed, 1);
  test.equal(tests.failed, 1);
  test.equal(tests.total, 2);
  tests.reset();
  test.equal(tests.passed, 0);
  test.equal(tests.failed, 0);
  test.equal(tests.total, 0);
});
