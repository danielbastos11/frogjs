// let {
//   capture, is, notBefore,
//   between, lazy, oneOrMore, maybe,
//   digit, digits, letters,
//   any, space, boundary
// } from '../lib';
//
// let number = capture(between(1, 3, digits));
// const book = capture(
//   maybe(digit, space),
//   between(1, 3, oneOrMore(letters), space)
// );
//
// const verse = is(number, maybe('-', notBefore(':',  number)), boundary);
// const chapter = is(number, maybe(':', verse));
// const range = is(chapter, maybe('-', chapter));
//
// let regex = is(book, range)
// console.log(regex);
