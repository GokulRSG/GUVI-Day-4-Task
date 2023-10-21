/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isNumber(value) {
	return typeof value === 'number';
}

function isEven(num) {
	if (isNumber(num) == true) {
		if (num % 2 == 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return -1;
	}
	///Your code Ends here
}
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/