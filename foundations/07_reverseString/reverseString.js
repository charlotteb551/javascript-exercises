const reverseString = function(string) {
    let reverseString="";
    let stringLength=string.length;
    for (let i=0;i<stringLength;i++){
        reverseString+=string[stringLength-1-i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
