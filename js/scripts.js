var primeSifter = function(number) {
  var range_prime = range(number, 2);
  var output_array = [2];
  // var index = 0;
  range_prime.forEach(function(n) {
    // for (var i = 2; i < number; i++) {
        if (output_array.every(function(element) {return n % element !== 0})) {
        output_array.push(n);
      }

      // }
    // }

 //   range_prime.forEach(function(i) {
 //
 //        if ((n !== 1) && (i !== 1) && (n > i) && ((n%i) !== 0)) {
 //          output_array.push(i);
 //        }
 //
 //   })
 //
 });
// return output_array;
return output_array;

};

var divCheck = function(array) {
  var truthvalue;
  for (var i = 2; i <= array.length; i++) {
    array.every(function(element, i) {
    truthvalue = (element % i !== 0);
      })
    }
  return truthvalue;
};

var range = function(number, start) {
  var ranged_nums = [];
  for (var i=start; i <= number; i++) {
    ranged_nums.push(i);
  }
  return ranged_nums;
};
