let a = parseFloat(prompt("nhap canh a"));
let b = parseFloat(prompt("nhap canh b"));
let c = parseFloat(prompt("nhap canh c"));
if (a + b > c && a + c >b && b + c > a){
    if(a === b & b === c){
        alert("day la tam giac deu");
    }else if(a === b || b === c || a === c){
        alert("day la tam giac can");
    }else if (a*a + b*b === c*c || c*c + b*b === a*a || a*a + c*c === b*b){
        alert("day la tam giac vuong");
    }else {
        alert("day la tam giac thuong");
    }
}else {
    alert("day ko phai tam giac ");
}