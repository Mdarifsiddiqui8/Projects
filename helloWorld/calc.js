let n1 = prompt("Type Num1:");
n1 = Number(n1);

let n2 = prompt("Type num2: ");
n2 = Number(n2);

let n3 = prompt("Type num3: ");

switch (n3) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "/":
        if (n2 == 0) {
            console.log("Infinite");
        } else {
            console.log(n1 / n2);
        }
        break;
    case "*":
        console.log(n1 * n2);
        break;
}