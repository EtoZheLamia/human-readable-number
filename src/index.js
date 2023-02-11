module.exports = function toReadable (number) {
    const DIGITS =['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const exceptions = {
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve', 
        13 : 'thirteen',
        15 : 'fifteen',
        18 : 'eighteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty', 
        80 : 'eighty'
    }
    let result
    if (exceptions.hasOwnProperty(number)) {
        return  result = exceptions[number]
    }
    if (number <= 9) {
        return  result = DIGITS[number]
    } 
    if (number > 9 && number < 20) {
        return  result = `${DIGITS[number % 10]}teen`
    }
    if (number < 100 && number % 10 === 0) {
        return  result = `${DIGITS[Math.floor(number / 10)]}ty`
    }
    if (number < 100 && !number % 10 === 0) {
        return  result = `${exceptions.hasOwnProperty(number - (number % 10)) 
            ? exceptions[number - (number % 10)] 
            : DIGITS[Math.floor(number / 10)] + 'ty'} ${DIGITS[number % 10]}`
    }
    if (number % 100 === 0) {
        return  result = `${DIGITS[number / 100]} hundred`
    }
    if (number % 10 === 0 && number >= 100) {
        return  result = `${DIGITS[Math.floor(number / 100)]} hundred ${exceptions.hasOwnProperty((number % 100)) 
            ? exceptions[number % 100] 
            : DIGITS[Math.floor((number % 100) / 10)] + 'ty'}`
    }
    if (number >= 100 && number % 100 < 20) {
        return  result = `${DIGITS[Math.floor(number / 100)]} hundred ${number % 100 <= 9 
                    ? DIGITS[number % 100] 
                    : exceptions.hasOwnProperty(number % 100) 
                        ? exceptions[number % 100]
                        : DIGITS[Math.floor((number % 100) % 10)] + 'teen'}`
    }
    if (number >= 100) {
        return result = `${DIGITS[Math.floor(number / 100)]} hundred ${exceptions.hasOwnProperty((number % 100) - Math.floor(number % 10)) 
                    ? exceptions[(number % 100) - Math.floor(number % 10)] 
                    : DIGITS[Math.floor((number % 100) / 10)]+ 'ty' } ${DIGITS[number % 10]}`
    }
    return result
}
