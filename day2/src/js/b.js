const sum = (...arg) => {
    return arg.reduce((prev, cur) => prev + cur)
}

//sum(1,2,3,4,5)




const reverse = (str) => {
    return str.split('').reverse('').join('')
}

//反转字符串


export { sum, reverse }