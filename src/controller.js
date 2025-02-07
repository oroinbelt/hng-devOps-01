const axios = require('axios')

const isPrime= (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

const digitSum = (n) => {
    return n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

const isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    return num === digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0);
}

const getProperties = (num) => {
    const properties = [];
  
    if (isArmstrong(num)) {
        properties.push("armstrong")
    };
    if (num % 2 === 0) {
        properties.push("even")
    } else {
        properties.push("odd")
    };
  
    return properties;
}

const getFunFact = async (num) => {
    const funFactResponse = await axios.get(`http://numbersapi.com/${num}`);
    return funFactResponse.data;
}

exports.getNumberProperties = async (req, res) => {
    try {
        let num = parseInt(req.query.number)

        if (isNaN(num)) {
            return res.status(400).json({
              number: req.query.number,
              error: true,
            });
          }

        const response = {
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: getProperties(num),
            digit_sum: digitSum(num),
            fun_fact: await getFunFact(num)
        };

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}