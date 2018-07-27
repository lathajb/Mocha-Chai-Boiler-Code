'use strict'

var assert = require('assert');


/**
 * BDD Style : describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach()
 */


beforeEach(function() {
  console.log('Before every test case executes');
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});