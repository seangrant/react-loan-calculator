'use strict';

let fixedNumericString = function(value, fixed){
	let fixedNumeric = value.toFixed(fixed);
	return fixedNumeric.toString();
};
let integerLength = function(value){
	var s =  fixedNumericString(value);
	return s.length - 3;
}

let pad = function(num, integer, decimal) {
	  let size = decimal + integer + 1;
    var s = fixedNumericString(num, decimal)+"";
    while (s.length < size) s = "0" + s;
    return s;
}

let numeric = {
	toFixedNumericString: fixedNumericString,
	integerLength: integerLength,
	pad: pad
};

module.exports = numeric;
