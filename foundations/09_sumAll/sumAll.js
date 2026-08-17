const sumAll = function(num1,num2) {
    if (num1 > 0 && Number.isInteger(num1) && num2 > 0 && Number.isInteger(num2)){
        sum=0
        if (num2>num1){
           for(i=num1;i<num2+1;i++){
                sum+=i;
            } 
        }else{
            for(i=num2;i<num1+1;i++){
                sum+=i
            }
        }
        return sum
    }else{
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
