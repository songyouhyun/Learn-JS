const calculator = {
    plus: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    multiple: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
    power: function(a, b){
        return a**b;
    }
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 5)
const multiple = calculator.multiple(5, 5)
const divide = calculator.divide(5, 5)
const power = calculator.power(5, 5)
console.log(`${plus} ${minus} ${multiple} ${divide} ${power}`)
