function collect_all_even(inputs) {
    var print = getPrint(inputs);

    return print;
}

function getPrint(inputs){
    var printArray = [];

    inputs.forEach(function(num){
       if(num%2 === 0)
       {
           printArray.push(num);
       }
    });

    return printArray;
}

module.exports = collect_all_even;
