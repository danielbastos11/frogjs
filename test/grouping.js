const q = require('../index.js');
const expect = require('chai').expect;

describe('Grouping', () => {
  describe('Group', () => {
    it('should work for single child', () => {
      expect(q.group('a')).to.equal('a');
    });

    it('should work for multiple children', () => {
      expect(q.group('a', 'b')).to.equal('(?:ab)');
    });
  });

  describe('Capture', () => {
    it('should work for single child', () => {
      expect(q.capture('a')).to.equal('(a)');
    });

    it('should work for multiple children', () => {
      expect(q.capture('a', 'b')).to.equal('(ab)');
    });
  });

  describe('Is', () => {
    it('should work', () => {
      expect(q.is('a')).to.equal('a');
    });

    it('should work with many args', () => {
      expect(q.is('a', 'b')).to.equal('ab');
    });
  });

  describe('Before', () => {
    it('should work', () => {
      expect(q.before('a', 'b')).to.equal('b(?=a)');
    });

    it('should work with many args', () => {
      expect(q.before('a', 'b', 'c')).to.equal('(?:bc)(?=a)');
    });
  });

  describe('Not Before', () => {
    it('should work', () => {
      expect(q.notBefore('a', 'b')).to.equal('b(?!a)');
    });

    it('should work with many args', () => {
      expect(q.notBefore('a', 'b', 'c')).to.equal('(?:bc)(?!a)');
    });
  });
});
