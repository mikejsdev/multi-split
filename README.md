# Multi Split
Split a string into an array of substrings using an array of strings as seperators.

Javascript's current String.split() only allows a single string to be specified as a seperator or Regex can be used which can become complicated and error prone if for example characters need to be prefixed with escape characters.

Multi Split allows you to split a sting on an array of strings. No Regex is required.

# Example

const multiSplit = require('multi-split');

const result = multiSplit("The quick brown fox jumps over the lazy dog", ['quick', 'jumps']);

console.log(result);
// [ 'The ', ' brown fox ', ' over the lazy dog' ]

# Example 2

const multiSplit = require('multi-split');

const result = multiSplit("this.is a+string&with(lots$of@seperators", ['+', '.', ' ', '(', '&', '$', '@']);

console.log(result);
//[ 'this', 'is', 'a', 'string', 'with', 'lots', 'of', 'seperators' ]