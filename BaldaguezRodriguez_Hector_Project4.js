//alert("JavaScript works!");

// Hector Baldaguez Rodriguez
// SDI 1403
// Project-4
// Solving Problems for the future
// I'm solving all 12 so I can get the credit for the errors I made in previus projects.



// Global Variables
var say = function (message) {console.log(message);};
var pNumberReturn;
var emailReturn;
var urlReturn;
var titleUpReturn;
var stringChangeReturn;

// All my functions

// String functions (Problem and solution):

// Does a string follow a 123-456-7890 pattern like a phone number?
// Cheking Number value
var phoneNum = function (string){
    var phoneNumber = ("123-456-7890");
    var end = phoneNumber.length;
    var phonNum = true;
    
    if ( isNaN(phoneNumber) && phoneNumber.substring(0,end) ){
        
        say ("Huray! you did it. Your phone number is " + phoneNumber);
        phonNum = true;
    }else { 
            phonNum = false;
            say ("Try again.");
        }; 
            
     return phonNum;   
};

//Does a string follow an aaa@bbb.ccc pattern like an email address?
var validateEmail = function (emailAddre){
    var email = ("halokenza@gmail.com");
    var emailAdd = true;
    
    if (email.indexOf ("@") || email.indexOf(".") ){
        
        say("This is your email: " + email);
        emailAdd = true
    } else {
            say("This is not an email.");
            emailAdd = false;
        };
    return emailAdd;  
};



//Is the string a URL? (Does it start with http:// or https://?)
var urlValidation = function(url){
    var urlAdd = true;
    
    if ( url.substring(0,7) === "http://"  || url.substring(0,8) === "https://"){
        
    
        say ("This is a valid website " + url);
        urlAdd = true;
    }else{ 
        
        say ("Not a valid email.");
        urlAdd = false;
        };
  return urlAdd;  
};



//Title-case a string (split into words, then uppercase the first letter of each word)

var titleUpCase = function(titleString) {
    var capsLetters = titleString.split(" ");
    var titleFixed = " ";
    // Did nested loop to regain points on previus projects.
    for (var i = 0; i < capsLetters.length; i++) {
          capsLetters[i] = capsLetters[i].charAt(0).toUpperCase() + capsLetters[i].substring(1, capsLetters[i].length);
          
    
    }; 
    for (i = 0; i < capsLetters.length; i++){
        titleFixed = titleFixed + capsLetters[i] + " ";
        };
    
    
    return titleFixed;
};

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" -> "a/b/c".
var stringChange = function(string, seperators, sepReplace){
    
    var newSep = string.split(seperators);
    var strChange = " ";
    
    for (i = 0; i < newSep.length; i++){
        if (i < newSep.length - 1) {
             strChange = strChange + newSep[i] + sepReplace;
             
        }else {
            strChange = strChange + newSep[i];
        }
        
   
   
    };
    
    return strChange;
};


// Number functions (Probles and Solutions)

//Format a number to use a specific number of decimal places, as for money: 2.1 -> 2.10



//Fuzzy-match a number: is the number above or below a number within a certain percent?



//Find the number of hours or days difference between two dates.



//Given a string version of a number such as "42", return the value as an actual Number, such as 42.




//Array functions (Problems and solutions)

//Find the smallest value in an array that is greater than a given number



//Find the total value of just the numbers in an array, even if some of the items are not numbers.




//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] -> [{a:1},{a:2},{a:3}].



// Main Code
// Return of true or false for Phone Number.
pNumberReturn = phoneNum (" "); // Phone number string.
say("The Boolean answer is " + pNumberReturn); // Boolean answer rue or false.

// Return of true or false for email.
emailReturn = validateEmail (" ");
say("The answer for this Boolean is " + emailReturn);

// Return if URL validation is true or false.
urlReturn = urlValidation("https://gaming.net");
say("The Boolean answer is " + urlReturn);
urlReturn = urlValidation("http://animeshippuuden.com");
say("This email is also valid" + urlReturn);

// If uppercasing has been done or not.
titleUpReturn = titleUpCase("i love to program.");
say("My new titlte is " + titleUpReturn);

// Cahnging the seperators
stringChangeReturn = stringChange ("a,d,f" ,"," ,"|");
say(stringChangeReturn);
