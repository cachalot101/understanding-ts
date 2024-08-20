type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor,
) {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number'){
    //     return +result
    // } else {
    //     return result.toString();
    // }
    return result;
}

const combinedAges = combine(30, 60, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '60', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

type Nature = {
    city: string,
    country: string,
}

type Hidechan = {
    name: string,
    age: number,
    born: Nature
}

function whoareyou (user: Hidechan) {
    console.log(`I am ${user.name} desuyo`)
}

const me: Hidechan = {
    name: 'Hide',
    age: 4,
    born: {
        country: 'Japan',
        city: 'Tokyo'
    },
}

whoareyou(me)