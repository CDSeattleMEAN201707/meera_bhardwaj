module.exports = function (){
  return {
    add: function(num1, num2) {
        num1+num2;
        console.log("the sum is "+num1+num2);
    },
    multiply: function(num1, num2) {
        num1*num2;
        console.log("the multiplication value is "+num1*num2);
    },
    square: function(num) {
        Math.pow(num,2);
        console.log(`the square of ${num} is ${Math.pow(num,2)}`);
    },
    random: function(num1, num2) {
        var rand = Math.floor(Math.random()*num2)+num1;
        console.log(`A random number between ${num1} and ${num2} inclusive is ${rand}`);
    }
  }
};
