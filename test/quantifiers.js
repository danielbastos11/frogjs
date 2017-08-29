const q = require('../dist/frog');
const expect = require('chai').expect;

describe('Quantifiers', () => {
  describe('Zero or More (*)', () => {
    it('works', () => {
      expect(q.zeroOrMore('a')).to.equal('a*');
    });

    it('accepts many args', () => {
      expect(q.zeroOrMore('a', 'b')).to.equal('(?:ab)*');
    });
  });

  describe('One or More (+)', () => {
    it('works', () => {
      expect(q.oneOrMore('a')).to.equal('a+');
    });

    it('accepts many args', () => {
      expect(q.oneOrMore('a', 'b')).to.equal('(?:ab)+');
    });
  });

  describe('Maybe (?)', () => {
    it('works', () => {
      expect(q.maybe('a')).to.equal('a?');
    });

    it('accepts many args', () => {
      expect(q.maybe('a', 'b')).to.equal('(?:ab)?');
    });

    it('avoids accidental lazy quantifiers', () => {
      expect(q.maybe(q.oneOrMore('a'))).to.equal('(?:a+)?');
      expect(q.maybe(q.zeroOrMore('a'))).to.equal('(?:a*)?');
      expect(q.maybe(q.maybe('a'))).to.equal('(?:a?)?');
    });
  });

  describe('Exactly ({x})', () => {
    it('works', () => {
      expect(q.exactly(3, 'a')).to.equal('a{3}');
    });

    it('accepts many args', () => {
      expect(q.exactly(3, 'a', 'b')).to.equal('(?:ab){3}');
    });

    it('one', () => {
      expect(q.exactly(1, 'a')).to.equal('a');
    });

    it('accepts one with many args', () => {
      expect(q.exactly(1, 'a', 'b')).to.equal('ab');
    });
  });

  describe('At Least ({x,})', () => {
    it('works', () => {
      expect(q.atLeast(3, 'a')).to.equal('a{3,}');
    });

    it('accepts many args', () => {
      expect(q.atLeast(3, 'a', 'b')).to.equal('(?:ab){3,}');
    });

    it('zero', () => {
      expect(q.atLeast(0, 'a')).to.equal('a*');
    });

    it('accepts zero with many args', () => {
      expect(q.atLeast(0, 'a', 'b')).to.equal('(?:ab)*');
    });

    it('one', () => {
      expect(q.atLeast(1, 'a')).to.equal('a+');
    });

    it('accepts one with many args', () => {
      expect(q.atLeast(1, 'a', 'b')).to.equal('(?:ab)+');
    });
  });

  describe('At Most ({,x})', () => {
    it('works', () => {
      expect(q.atMost(3, 'a')).to.equal('a{0,3}');
    });

    it('accepts many args', () => {
      expect(q.atMost(3, 'a', 'b')).to.equal('(?:ab){0,3}');
    });

    it('one', () => {
      expect(q.atMost(1, 'a')).to.equal('a?');
    });

    it('accepts one with many args', () => {
      expect(q.atMost(1, 'a', 'b')).to.equal('(?:ab)?');
    });
  });

  describe('Between ({x,y})', () => {
    it('works', () => {
      expect(q.between(5, 7, 'a')).to.equal('a{5,7}');
    });

    it('accepts many args', () => {
      expect(q.between(5, 7, 'a', 'b')).to.equal('(?:ab){5,7}');
    });

    it('zero and one', () => {
      expect(q.between(0, 1, 'a')).to.equal('a?');
    });

    it('accepts zero and one with many args', () => {
      expect(q.between(0, 1, 'a', 'b')).to.equal('(?:ab)?');
    });
  });

  describe('Lazy (*?)', () => {
    it('works', () => {
      expect(q.lazy(q.zeroOrMore('a'))).to.equal('a*?')
    });
  });
});
