let year = parseInt(prompt("nhap so nam vao nghe"));
if (year < 0){
    alert("sai cu phap")
}else if (year < 1){
    alert("moi vao nghe(chao buong)");
}else if(1 <= year && year <= 3){
    alert("nhan vien co kinh nghiem(mam 3)");
}else if(4<=year && year <= 6){
    alert("chuyen vien(mam 2 )");
}else {
    alert("quan ly( truong buong)")
}