const sum = (...arg)=>{
    return arg.reduce((prev,cur) => prev + cur)
}

//sum(1,2,3,4,5)
export {sum}