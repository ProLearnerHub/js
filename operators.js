// Operators are arithmetic symbols that help us perform mathematical calculations
// Eg +, -, /, *, %, =

// '+' is used to add integers or concatenate (join) strings

// Eg '3 + 4' is 7, but also, 'Claud' + 'Watari' is 'ClaudWatari'
// Sometimes, it can be used to concatenate numbers as well, eg:
// '3' + 2 gives '32'
//  In JavaSvript, to ensure our numeric data is treated as an integer, we have to parse it, and convert it to a base we need (normally base 10 for normal integers (1-9))


// '-' is used to subtract integers, but cannot be used to separate strings. Will usually return an error if used on strings

// '/' is used to divide integers, and can also not be used on strings

// '*' is used to multiply integers

// '%' is used to find the remainder of a division. Eg, to find all numbers that are divisible by 2 (even numbers), we write as below

let even_number = function(number_to_check) {
 return number_to_check % 2 === 0 ;
}
// Here, we check that the number divided by 2 has no remainder (or has a remainder of 0), hence we know it is an even number


// '=' is used to assign values, and to compare values
// To assign, a single '=' is used
// To compare, double or triple '=' are used, as with our example above.
// Double '=' check that the values match, not necessarily the types, so '2' == 2 will return true
// Triple '=' check that the values and types match, so '2' === 2 will return false, since one is an integer and the other a string.
