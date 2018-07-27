'use strict'

var assert = require('assert');

/**
 * TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():
 * */

suite('Array', function() {
  setup(function() {
     // ...
  });

  suite('#indexOf()', function() {
    test('should return -1 when not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});