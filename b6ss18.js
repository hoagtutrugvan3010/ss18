let year = parseFloat(prompt("nhap nam bat ki"));
if (year === null || year == " "){
    alert("sai cu phap")
}else{
    if((year % 4 === 0 && year % 10 !== 0 ) || year % 400 === 0){
        alert("Nam nay la nam nhuan");
    }else{
        alert("Nam nay kp nam nhuan");
    }
}