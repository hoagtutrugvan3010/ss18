let login = prompt("nhap ten dang nhap");
if(login ==="ADMIN"){
    var password = prompt("nhap mat khau")
    if(password ==="TheMaster"){
        console.log("Wellcome")
    }else if(password === null){
        console.log("Cancelled")
    }else {
        console.log("Wrong password")
    }
}else if(login === null){
    console.log("Cancelled")
}else {
    console.log("I Dont Know")
}