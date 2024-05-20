"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
// EXERCICE 3 (NAME CASES)
var personName = "Babar";
// IN LOWER CASE
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
// EXERSICE 4 (Famous Quotie)
var qoute = "A person who never mode a mistake never tried anything new";
var author = "Albert Einstein";
console.log(" ".concat(author, " once said, \"").concat(qoute));
// EXERCISE 5 (Famous Person)
var qoute = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstein";
var message = " ".concat(famous_person, " once said, ").concat(qoute);
console.log(message);
// EXERSICE 6 (Stripping Names)
var personName = "\n\t BABAR AZAM\t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
// EXERCISE 7 (Number Eight)
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// EXERCISE 8 & 9
// EXERCISE 10 (Adding Comments)
//my name is BABAR
//Dated: 20/02/2024
//this program will run simple code just like hello world
console.log('hello world simple pragram');
// EXERCISE 11 (Names)
var members = ['azam', 'saqlain', 'mehmood', 'saba', 'sana'];
for (var i_1 = 0; i_1 < members.length; i_1++) {
    console.log(members[i_1]);
}
// EXERCISE 12 (Greetings)
var members = ['azam', 'saqlain', 'mehmood', 'saba', 'sana'];
var message = "kal birthday hai kis ki:";
for (var i = 0; i < members.length; i++) {
    console.log(message + members[i]);
}
// EXERCISE 13 (Your Own Array)
var tranportation = ['civic', 'bike', 'suzuki jisme cow ho'];
for (var i_2 = 0; i_2 < tranportation.length; i_2++) {
    console.log('I would like to own a ' + tranportation[i_2]);
}
// EXERCISE 14 (Guest List)
var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
exports.guest_list = guest_list;
for (var i_3 = 0; i_3 < guest_list.length; i_3++) {
    console.log('Respeted Sir/Madam' + guest_list[i_3] + ',\nwe invited you on dinner tomorrow.\n\mThank You');
}
// EXERCISE 15 (Changing Guest List)
// console.log('I would like to own a ' + tranportationn[i]):
var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
exports.guest_list = guest_list;
for (var i_4 = 0; i_4 < guest_list.length; i_4++) {
    console.log('Respected Sir/Madam ' + guest_list[i_4] + ',\nWe invited you on dinner tommorrow. \nThank You\n');
}
var not_present = 'farhan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
for (var i_5 = 0; i_5 < guest_list.length; i_5++)
    (console.log('Respected Sir/Madam ' + guest_list[i_5] + ',\nWe invited you on dinner tomorrow.\nThank You\n'));
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner. "));
//EXERCISE 16 (MORE GUESTS)
var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
exports.guest_list = guest_list;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
var not_present = 'farhan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
for (var i_6 = 0; i_6 < guest_list.length; i_6++) {
    console.log('Respeted Sir/Madam ' + guest_list[i_6] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner. "));
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i_7 = 0; i_7 < guest_list.length; i_7++) {
    console.log('Respeted Sir/Madam ' + guest_list[i_7] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i_8 = 0; i_8 < guest_list.length; i_8++) {
    console.log('Respected Sir/Madam ' + guest_list[i_8] + ',\nwe invited you on dinner tommorrow.\nThankYou\n');
}
//EXERCISE 17 (SHRINKING GUESTS LIST)
var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
exports.guest_list = guest_list;
// for(let i=0; i<guest_list.length; i++){
//   console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n' 
// }
var not_present = 'farhan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//   console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n' 
// }
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n')
// }
console.log('\nUnfortunately we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam.".concat(remove_guest, " your are not invited for dinner."));
}
for (var i_9 = 0; i_9 < guest_list.length; i_9++) {
    console.log('Respected Sir/Madam ' + guest_list[i_9] + ',\nYes you are still invited on tomorrow dinner\nThanks You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
//EXERCISE 18 (SEING THE WORLD)
// 18. seeing the World: Think of at least five places in the world you'd like to visit.
// . Store the locations in a array. Make sure the array is not in alphabetical order.
// . Print you array in its original order.
var places = ['cape town', 'delhi', 'faisalbad', 'bankkok', 'ahmedabad'];
console.log('original :' + places);
// Print your array in alphabetical order without modifying tha actual lis.t
console.log('copy ' + __spreadArray([], places, true).sort());
// . show that your array is still in its original order by printing it.
console.log('original :' + places);
// . print your array in reverse alphabetical order without changing ther order of the original list. 
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// . Show that your array is still in its original order by printing it again.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// . Reverse the order of your list. Print the array to show that its order has changed.
console.log('original :' + places.sort());
// . Reverse the order of your list agian. Print the list to show it's back to its original order.
console.log('original :' + places.sort().reverse());
console.log("n PRINTING NUMBER OF GUEST INVITED");
console.log("we had finally invited ".concat(guest_list.length, " from exercise 14"));
// EXERCISE 20 (THINK LANGUAGES)
var languages = ['english', 'urdu', 'hindi', 'french', 'arabic'];
console.log("list of languages:");
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var top_1 = languages_1[_i];
    console.log(top_1);
}
// create two objects
var book = {
    name: 'ESSENTIAL TYPESCRIPT',
    price: 450
};
var apple = {
    name: 'apple',
    price: 200
};
console.log("book name: ".concat(book.name, ", price: $").concat(book.price));
console.log("apple name: ".concat(apple.name, ", price: $").concat(apple.price));
// EXERCISE 22 (INTENSION ERROR)
var array = ['babr', 'taha', 3, 5, 8, "sana"];
console.log(array[5]);
console.log(array[5]);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[4]);
// EXERCISE 23 (CONDITION TESTS)
var cars = 'subaru';
// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru'); // True
// Test 2: Strict Equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru'); // True
// Test 3: Ineuality Comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(cars != 'subaru'); // False
// Test 4: Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(cars !== 'subaru'); // False
// Test 5: Less than Comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(cars < 'subaru'); // False (lexicographic comparison)
// Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(cars > 'subaru'); // False (lexicographic comparison)
// Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(cars <= 'subaru'); // True
// Test 8: Greator than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(cars >= 'subaru'); // True
// Test 9: Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(cars); // True (non-empty string is truthy)\
// EXERCISE 24 (MORE CONDITION TESTS)
var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
// **string Tests**
// Test 1: Equality (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True (case-insensitive)
// Test 2: strict equality (False)
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); // False (case-sensitive)
// Tesr 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // True
// Test 4: Inequality (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False (case-sensitive)
// **Lowercase Function Tests**
// Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)
// Test 6: Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains upperCase)
// **Numerical Tests**
// Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
// Test 8: Inequality (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True
// Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
// Test 10: Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
// Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // True (both conditions met)
// Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18); // False (neither condition met)
// **Array Tests**
// Test 13: In array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(5, note in numbers); // True (negation or "in" operator)
// EXERCISE 25 (ALIEN COLOURS)
// Create a variable called alien_color
var alien_color = "green";
// write an if statement to test whether the alin's color is green. If it is print a message that the player just earned 5 points.
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
// write one version of this program that passes the if test and another that fails.
// (Ther version that fails will have no output).
alien_color = "red";
if (alien_color == "green") {
    console.log("ther player just earned 5 points.");
}
// EXERCISE 26 (ALIEN COLOUR)
// choose a color for an alien as you
// did in Exercise 25, and write an if-else chain.
var alien_color = "green";
// if the alien's color is green, print a statement that
// the player just earned 5 poins for shooting the alein.
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
// EXERCISE 27 (ALIEN COLOUR #3)
var aliean_color = "green";
// If the alien is green, print a message that the player earned 5 points.
if (aliean_color == "green") {
    console.log("the player  earned 5 points.");
}
// If ther alien is yellow, print a message that the player earned 10 Points.
else if (aliean_color == "yellow") {
    console.log("the player just earned 10 points.");
}
// If ther alien is red, print a message that the player earned 15 Points.
else if (aliean_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("Please select right color");
}
// version 2
aliean_color = "red";
if (aliean_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (aliean_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (aliean_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("Please select right color");
}
// version 3
aliean_color = "yellow";
if (aliean_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (aliean_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (aliean_color == "red") {
    console.log("the player just earned 15 points.");
}
// EXERCISE 28 (STAGES OF LIFE)
// stages of life: write an if-else chain that determines a person's stage of life.
// set a value for the variable age, and then:
// . If the person is less than 2 yeas old, print a message that
// the person is a baby.
var age = 15;
if (age < 2) {
    console.log("the person is a babay.");
}
// . If the peson is at least 2 years old but less than 4, print
// a message that person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
// . If the person is at least 4 years old but less than 13,
// print a message that ther person is a kid.
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
// . If the person is at least 13 years old but less than 20,
// print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
// . If ther person is at least 20 years old but less than 65,
// print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("person is a adult.");
}
// . If ther person is age 65 or older, print a
// message that ther person is an elder
else {
    console.log("Person is a elder.");
}
// EXERCISE 29 (Favorite Fruit)
// Favorite Fruit: Make a array of your favorite fruits, and
// then write a series of independent if statements that check for certain
// fruits in your array.
// . Make a array of your three favorite fruits and call it favorite_fruits.
// . Make a array of your three favorite fruits and call it favorite_fruits.
// . write five if statements. Each should check whether a
// certain kind of fruit is in your array.
// If the fruit is in your array, ther if block should print a statement,
// such as You really like bananas!
var favorite_fruits = ['apple', 'Mango', 'Banana'];
if (favorite_fruits.includes('apple')) {
    console.log('I really like apple');
}
if (favorite_fruits.includes('Mango')) {
    console.log('I really like Mango!');
}
if (favorite_fruits.includes('Grapes')) {
    console.log('I really like Grapes!');
}
if (favorite_fruits.includes('Banana')) {
    console.log('I really like Banana!');
}
if (favorite_fruits.includes('Cherry')) {
    console.log('I really like Cherry!');
}
// EXERCISE 30 (Hello Admin)
//. Hello Admin: Make a array of five or more usernames,
// including the nae 'admin'. imagine your are writting code
// that will print a greeting to each user after they log in to a website.
// Loop through ther array, and print a greeting to each user:
// If ther username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?
// . otherwise, print a generic greeting, such as Hello Eric, thank you for
// logging in again.
var users = ['sana', 'babar', 'saba', 'hina', 'admin'];
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (user === "admin") {
        console.log("Hello admin, would your like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
// EXERCISE 31 (No Users)
// No users: Add an if test to Exercise 30 to
// make sure the list of users in not empty.
// . If the list is empty, print ther message
// wwe need to find some users!
var users = ['sana', 'babar', 'saba', 'hina', 'admin'];
if (users.length === 0) {
    console.log("we need to find some users!");
}
// . Remove all of the usernames from your array,
// and make sure the correct message is printed
else {
    users = [];
    console.log("All user have been removed" + users.length);
}
// EXERCISE 32 (Checking Username)
var current_users = ["saba", "admin", "ahmed", "babar", "raza"];
var new_user = ["fawad", "hussain", "user7", "admin", "user9"];
new_user.forEach(function (newUser) {
    if (current_users.some(function (currentUsers) { return currentUsers.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is avaiable."));
    }
});
// EXERCISE 33 (Ordinal NUmber)
// /*
// ordinal numbers indicate their position in a array, such as 1st or 2nd
// Most ordinal numbers end in th, except 1, 2, and 3,
// store through the array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal
// ending for each number. Your output should read "1st 2nd 3rd 4th 5th
//6th 7th 8th 9th", and each result should be on a seprarate line.
// */
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for loop
for (var i_10 = 0; i_10 < myNumbers.length; i_10++) {
    // now we use conditions
    if (myNumbers[i_10] == 1) {
        console.log("".concat(myNumbers[i_10], "st"));
    }
    else if (myNumbers[i_10] == 2) {
        console.log("".concat(myNumbers[i_10], "nd"));
    }
    else if (myNumbers[i_10] == 3) {
        console.log("".concat(myNumbers[i_10], "rd"));
    }
    else if (myNumbers[i_10] >= 4 && myNumbers[i_10] <= 9) {
        console.log("".concat(myNumbers[i_10], "th"));
    }
}
// EXERCISE 34 (Pizzas)
// Pizzas: Think of at least three kinds of your favorite pizza.
// Store these pizza names in array, and then use a for loop to print the
// name of each pizza.
// . Modify your loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output conaining a simple statement like I like pepperoni
// pizza.
// . Add a line at the end of your program, outside the for loop, that
// states how much you like pizza. The output should consist of three or more line
var myPizza = ["Cheesze Pizza", "Pepperoni Pizza", "Vgeterian Pizza"];
// print only names of pizza
for (var i_11 = 0; i_11 < myPizza.length; i_11++) {
    console.log(myPizza[i_11]);
}
// printing names and sentence/message
for (var i_12 = 0; i_12 < myPizza.length; i_12++) {
    console.log("I like to eat ".concat(myPizza[i_12]));
}
console.log("\nI really like to eat Pizzas. Pizza comes in a variety of flavors and tooping, allowing individuals to customize it to their liking");
// EXERCISE 35 (Animals)
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animals) {
    console.log("A ".concat(animals, " would make a great pet."));
});
console.log("Any of these animals would make a grerat pet!");
// EXERCISE 36 (T.Shirt)
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "code is life");
// EXERCISE 37 (Large Shirt)
// Modify the make_shirt() function so that shirts are large by defult,
// with a message that reads I love TypeScript. Make a large shirt and
// a medium shirt with the default message, and a shirt of any size with
// a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typecript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default  large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
// EXERCISE 38 (Cities)
// write a function called describ_city() that accepts the name of a city and is country. The function
function describ_city(nameofCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofCity, " is in ").concat(country);
}
;
// 3 cities
var city1 = describ_city("cap town,outh africa");
var city2 = describ_city("delhi,india");
var city3 = describ_city("hyderabad,pakistan");
var city4 = describ_city("UAE", "Dubai");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
// EXERCISE 39 (City Names)
// write a function called city_country() that takes in the name of a city and its country.
function city_country(city, country) {
    // return `"${city}, ${country}"`
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Karahi", "Pakistan");
var mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Riyaz", "Saudi Arabia"));
// EXERCISE 40 (Album)
// Write a function caleed make_album() that builds on object describing a music album.
// The function should take in an astist name and an album title, and it should return
// a object containing these two pieces of information.
// Use the function to make three dictionaries representing different album. Print each
// return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store tha numbe of tracks
// on an album. If the calling line includes a value for the numbe of tracks, add that value
// to the album's Object. Make at least one new function call that includes the number of tracks
// on an album.
function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("Ali", "Rang-e-Mohabbat");
var album2 = make_album("Madad", "Roshan Andhera");
var album3 = make_album("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
// Number of tracks
function make_album2(artistName, albumTitle, numberofTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberofTracks: numberofTracks };
}
var album4 = make_album2("Ali", "Dua ban ja", 30);
var album5 = make_album2("Madad", "Ajeeb Kahani", 55);
var album6 = make_album2("Ayaz", "Aj Hume", 70);
console.log(album4);
console.log(album5);
console.log(album6);
// EXERCISE 41 (Margicians)
// Magicians: Make a array of magicians's names. Pass the array to a fuction called
// Show_magicians(), which prints the name of each magician in the array.
var magician = ["brad", "Rmeez", "ainak wala"];
function Show_magicians(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
Show_magicians(magician);
// EXERCISE 42 (Great Magicians)
// Great Magicians: start with a copy of your program form Exercise 41.
// Write a function called make_great() that modifies the array of magicians
// by adding tha phrase the Great to each magician's name. Call show_magicians() to see that the
// list has actually been modified.
var magician = ["Don", "Rmeez", "Chris"];
function make_great(magician) {
    for (var i_13 = 0; i_13 < magician.length; i_13++) {
        magician[i_13] = magician[i_13] + " the Great";
    }
}
make_great(magician); // Modifies the original array
// show_magicians(magicians); // Shows modified names
// EXERCISE 43 (Unchaged Magicians)
// Unchanged Magicians: Start with your work from Exercise 42.
// Call the funcation make_great() with a copy of the array of magicians' names.
// Because the original array will be unchanged, return the new array and store it
// in a seprarate array. Call show_magicians() with each array to show that you have
// in a separate array. Call Show_magicians() with each array to show that the have
// one array of the original names and one array with the Great added to each magicians's name.
var magicians = ["ALikco", "David", "Chris"];
function make_great(magicians) { }
{
    var greatMagicians_1 = [];
    magicians.forEach(function (magicians) {
        greatMagicians_1.push("".concat(magicians, " the Great"));
    });
    return greatMagicians_1;
}
var greatMagicians = make_great(magicians.slice()); // Creats a new modified array
console.log("original magicians");
show_magicians(magicians); // shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
// EXERCISE 44 (Sandwiches)
// Sandwiches: Write a function that accepts a arrays of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summmary of the sandwich that is being ordered. Call the function three times,
// using a different number of argumeters each time.
function make_sandwich() {
    var Itmes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Itmes[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(Itmes.join(','), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "ketchup", "aaalu");
make_sandwich("avocado", "spreouts", "mustard", "mayo");
// EXERCISE 45 (Cars)
// Cars: Write a function that stores information about a car in a Objects. The function should
// alwas receive a manufacturer and a model name. It should then accept an arbitrary number of
// keyword arguments. Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that's returned to make sure
// all the information was stored correctly.
function make_car(manufacturer, model) {
    var oprions = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        oprions[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    oprions.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
