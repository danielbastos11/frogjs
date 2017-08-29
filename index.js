// let { capture, is, notBefore } = require('./lib/grouping');
// let { between, lazy, oneOrMore, maybe } = require('./lib/quantifiers');
// let {
//   digit, digits, letters,
//   any, space, boundary
// } = require('./lib/sequences');
//
// let number = capture(between(1, 3, digits));
//
// const book = capture(
//   maybe(digit, space),
//   between(1, 3, oneOrMore(letters), space)
// );
// const verse = is(number, maybe('-', notBefore(':',  number)), boundary);
// const chapter = is(number, maybe(':', verse));
//
// const range = is(chapter, maybe('-', chapter));
//
// let regex = is(book, range)
// console.log(regex);

const q = require('./dist/frog');
console.log(JSON.stringify(q, null, 2));
