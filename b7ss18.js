let number1 = parseFloat(prompt("nhap so a"));
let number2 = parseFloat(prompt("nhap so b"));
let choice = prompt("Mời bạn nhập vào các phép tính (+, -,*,/)");
switch (choice) {
    case "+" :
        alert("ket qua cua phep tinh" + (number1 + number2));
        break;
    case "-" :
        alert("ket qua cua phep tinh" + (number1 - number2));
        break;
    case "*" :
        alert("ket qua cua phep tinh" + (number1 * number2));
        break;
    case "/" :
        alert("ket qua cua phep tinh" + (number1 / number2));
        break;
}