console.log(calc(3,4));
console.log(calc(8,4));

function calc (a,b) { //function declaration
    return (a + b);
}


function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);