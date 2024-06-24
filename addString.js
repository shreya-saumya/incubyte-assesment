function add(numberString = '') {
        let output = 0;
        if(numberString!=='')
        convertString(numberString).forEach((number) => {
            validateNumber(number);
            output += +number;
        });

        return output;
    }

   function convertString(string) {
        var numberPattern = /-?\b\d+(\.\d+)?\b/g;
        return numbers = string.match(numberPattern);
    }

   function validateNumber(number) {
        if(Number(number) < 0) {
            throw new Error('negative numbers not allowed');
        }
    }
module.exports = add;


