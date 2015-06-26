class SimpleTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.total = 0;
  }

  assert(condition, label = 'Unknown') {
    this.total++;
    if (!condition) {
      this.failed++;
      console.error('Test failed: ' + label);
    } else {
      this.passed++;
    }

    return this;
  }

  showResults() {
    if (this.passed === this.total) {
      console.log('All tests passed. (' + this.total + ')');
    } else {
      console.log('Passed:' + this.passed + '/' + this.total);
      console.log('Failed:' + this.failed + '/' + this.total);
    }

    return this;
  }

  reset() {
    this.constructor();

    return this;
  }
}

tests = new SimpleTest;

Meteor.methods({
  runTests: function() {
    tests.showResults();
  },
});
