const data_types = [
  "string", /* a string is data that represents a combination of alphanumeric characters. Is usually written using quotation marks (both single and double are okay, but they're usually written using double quotation marks) */
  0, // an integer is data that represents a whole number
  1.2, // an float is data that represents a floating point number (with decimals)
  true, // a boolean is data that represents truthy or falsy values. Can only either be true or false
  {}, // an object is data that represents keyed collections, just like objects in real life. (eg, a person is an object, which has properties and values and method)
  [], // an array is an object which is a collection of different, ordered data. Can contain data of any type. (eg, a class is an array of students and teachers and books and pens)
  () => {}, // a representation of a function in new JavaScript format. Regular function definitions are as below
  function function_name() { return /* your data here */ } // a function is an object also, which processes input to produce an output
];

function about_functions_and_objects() {
//   this function describes more about functions and objects
//   functions are written using the 'function' keyword, followed by the name of the function (eg, 'about_functions_and_objects'), then open and closed braces.
//   if there are any parameters (input) to be passed to the function, they are written inside the braces, separated by commas if more than one
//   normally, curly braces follow, especially for multi-line functions, but can be ignored if the function runs in only a single line
//   the processing of the input is done in between the curly braces, and is returned using the 'return' keyword
//   At this point, we have only defined a function, we have not yet called it, or executed it.
//   To call your function, just write the name you gave it (eg, 'about_functions_and_objects'), followed by open and closed braces, passing in any arguments if your function had parameters
//   A demonstration would be:
  function example(input_here) {
    return input_here; 
  }
//   Above, we have defined a function called 'example', that takes a single input item called 'input_here'. We perform no processing on our input, but rather return it immediately.
//   To call the function, we would just use the function name we gave it, and pass a value that will be processed as 'input_here'. So, it would be
  example('js functions');
//   This function call will print the value 'js functions'.
//   Now you can call your example function with as many different input data as possible.
//   Functions are important if we want to process data multiple times, without having to keep rewriting the logic
  
//   A real example would be a function that adds to numbers. See below
  
  function add(number_one, number_two) {
    return number_one + number_two; 
  }
//   then we call our function
  add(2, 3);
//   this will print '5'
  add(20, 8)
//   this will print '28'
  
/*   functions are used almost everywhere: To process your login to your favorite social site, to update your whatsapp status,
  even to enroll you ina new school database. Your information is the input, and based on that, the function will perform 
   calculations to determine the necessary output  
*/
  
  
//   Objects, as we discussed, are representations of real life objects, like a person, a car, a computer etc.
//   To create a new object, we use cury braces (remember function body definitions, with curly braces). eg {}
//   So, to create a person object, we will write as below
  let person = {}
//   'let' is a keyword in JavaScript that is used to declare new variables in memory (allocating to computer memory, a space that holds data with this value)
//   To add new properties to our person object, we will write as below:
  person.name = 'Claud Watari';
  person.hobbies = ['coding', 'music'];
  person.isTutor = true;
//   here, we have added three properties to our person object (their name, hobbies (which is a list), and a check on whether they are a tutor (teaching you JavaSvript, right?))
// So, when we call person, we will receive data as below:
  person: {
   "name": "Claud Watari",
   "hobbies": ['coding', 'music'],
   "isTutor": true
  };
  
//   Objects are used in many setting, eg, to check that a user is an admin for a site to allow them access to certain pages, to check that a student's fees is fully paid, or that a person has been blocked on your social pages
}

