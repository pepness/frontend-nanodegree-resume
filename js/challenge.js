/**************************

Problem 1

***************************/

/*
We learned about relational operators and how they can classify the relationship between two values.
Your job is to write the function getRelationship(x,y) function, which should return a string
representing whether x is >, < or = y. For example:

var rel = getRelationship(2, 3);
console.log(rel); // <

If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."

where [this value] and [that value] are replaced with the non-numerical values.
The sentence should be grammatically correct by outputting either is or are and
pluralizing number if necessary.

For example:

var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because this is not a number"

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"

Notice in the second example, because the y value was missing, the output said that
undefined was not a number.

*/
/*
function getRelationship(x, y) {
    // Your code goes here!
    var res 	= "";
    var _x 		= x;
    var _y 		= y;

    var flagX 		= (typeof _x === "number");
    var undefinedX 	= (typeof _x === "undefined");
    var nanX = (typeof _x === 'number' && isNaN(_x));
    console.log("nanX", nanX);

    var flagY = (typeof _y === "number");
    var undefinedY = (typeof _y === "undefined");
    var nanY = (typeof _y === 'number' && isNaN(_x));
    console.log("nanY", nanY);

       if(!(flagX && flagY)) {

         if(undefinedY) {
             if(flagX && !nanX) {
                 res = "Can't compare relationships because [" +_y+ "] is not a number";
             }
             else {
                 res = "Can't compare relationships because [" +_x+ "] and ["+_y+"] are not numbers";
             }
         }
         else if(!flagX && !flagY) {
             res = "Can't compare relationships because [" +_x+ "] and ["+_y+"] are not numbers";
         }
         else if(!flagX) {
             res = "Can't compare relationships because [" +_x+ "] is not a number";
         }
         else {
             res = "Can't compare relationships because [" +_y+ "] is not a number";
         }
     }

    if(flagX && flagY) {
        if(x > y) {
            res = "[" +_x+ "] is > than [" +_y+ "]";
        }
        else if(x < y){
            res = "[" +_x+ "] is < than [" +_y+ "]";
        }
        else {
            res = "[" +_x+ "] is = to [" +_y+ "]";
        }
    }
    return res;
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
console.log(getRelationship(NaN, NaN));
*/

/**************************

Problem 2

***************************/


/*
Twelve people have walked on the Moon. They are:

    Neil Armstrong
    Buzz Aldrin
    Pete Conrad
    Alan Bean
    Alan Shepard
    Edgar Mitchell
    David Scott
    James Irwin
    John W Young
    Charles Duke
    Eugene Cernan
    Harrison Schmitt

You'll notice that these names are listed in the order that they first stepped on the Moon,
not alphabetical order. To alphabetize them, it would make sense to write their names as
lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N)
containing strings of names and returns an alphabetized array of names in lastname, firstname format.
*/

/*
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var myArray = names;
    var myArray2 = [];
    var myArray3 = [];
    var myArray4 = [];
    var myArray5 = [];
    var name = "";
    var name2 = "";
    var i = 0;
    var j = 1;
    //console.log(myArray[0]);
    for(arreglo in myArray) {
        //console.log(arreglo);
        name = myArray[arreglo];
        console.log("name", name);
        myArray2 = name.split(" ");
        //name = myArray2[arreglo +1] + myArray2[arreglo];
        console.log(myArray2[0]);
        console.log(myArray2[1]);

        myArray3[i] = myArray2[0];
        myArray3[j] = myArray2[1];

        name2 = myArray3[j] + " " + myArray3[i]
        myArray4[arreglo] = name2;
        i = i + 2;
        j = j + 2;
        //console.log("i", i);
    }
    myArray5 = myArray4.sort();
    console.log(myArray3.length);
    //name = myArray2[0];
    //console.log("name", name);
    console.log(myArray3[0]);
    console.log(myArray3[1]);
    console.log(myArray3[2]);
    console.log(myArray3[3]);
    //console.log(myArray3);
    return myArray5;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
*/


/**************************

Problem 3

***************************/


/*
Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst
score is 0. Alongside the score, PSI provides relevant advice for improvements.

By integrating an automated PSI score into a suite of front-end unit tests, you can periodically
check a website's overall speed.

Let's assume you're building the front-end testing framework and you make a call to the PSI API.
You receive the JSON below as a response.

Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object
and returns the total number of bytes to load the website 1023515.

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in
ruleResults and returns an array of their strings.
var psiResults;
*/

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
/*
function ruleList(_results) {
    // Variables initialization
    var jsonObj = _results;
    var res = [];
    var localizedRuleName = "";
    var i = 0;

    //Iterate through JSON object
    //psi it is not a number it is a property of the JSON Objetc
    for(psi in jsonObj.formattedResults.ruleResults) {
        localizedRuleName = jsonObj.formattedResults.ruleResults[psi].localizedRuleName;
        //We save the string in the array
        res[i] = comodin;
        i++;
    }
    console.log(res);
    return res;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(_results) {
    // Variables initialization
    var jsonObj = _results;
    var res = 0;
    var sBytes = "";
    var bytes = 0;

    //Iterate through JSON object
    for(psi in jsonObj.pageStats) {
        sBytes = jsonObj.pageStats[psi];

        //Every object with Bytes is a String, so we look for string values
        if(typeof jsonObj.pageStats[psi] === "string") {
            sBytes = jsonObj.pageStats[psi];
            //We use parseInt function to parse the string to a integer value
            bytes = parseInt(comodin);
            //We sum the Bytes
            res = res + bytes;
        }
    }
    return res;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
*/
