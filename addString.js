function add(numberString = '') {
    let negativeNumbers = [];

    let output = 0;
    if(!numberString) return output;
        try{
        convertString(numberString).forEach((number) => {
            validateNumber(number, negativeNumbers);
            output += +number;
        });
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }
    }
        catch(e){
            // console.log(e.message, "error")
            throw e;
        }

        return output;
    }

   function convertString(string) {
        var numberPattern = /-?\b\d+(\.\d+)?\b/g;
        return numbers = string.match(numberPattern) || [];
    }

   function validateNumber(number, negativeNumbers) {
        if (Number(number) < 0) {
        negativeNumbers.push(number);
    }
   }
module.exports = add;


