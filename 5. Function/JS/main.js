function aFunction() {
    console.log("Hello");
    return "aFunction";
}

const bFunction = function() {
    console.log("Hellow");
    return "bFunction";
}

const cFunction = () => {
    console.log("Array return");
    return ['Hello','cFunction'];
}
const parameterFunction = (par, ra) => {
    return par + ra;
}

console.log(aFunction());
console.log(bFunction());
console.log(cFunction());
console.log(parameterFunction('Hello','Parameter'));