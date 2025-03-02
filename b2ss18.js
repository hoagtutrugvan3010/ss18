let math = parseInt(prompt("nhap diem mon toan"));
let literature = parseInt(prompt("nhap diem mon van"));
let english = parseInt(prompt("nhap diem mon tieng anh"));
let overate = (math + literature + english)/3;

if(overate >= 8){
    console.log("gioi")
}else if(overate >= 6.5 && overate <= 7.9){
    console.log("kha")
}else if(overate >= 5 && overate <= 6.4){
    console.log("trung binh")
}else {
    console.log("Yeu")
}