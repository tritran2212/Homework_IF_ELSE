

/*CÁCH 1: Bài 1
document.getElementById("Check").onclick = function(){
        let soDuong = Number(document.getElementById("soDuong").value);
        let stringHTML= "";
        
        stringHTML = soDuong > 0 ?" So nhập vào là số dương": "số nhập vào là số âm";
        document.getElementById("ketQua").innerHTML=stringHTML;

}*/

document.getElementById("Check").onchange = function(){
    let soDuong = document.getElementById("soDuong").value;
    let stringHTML= "";

    if(soDuong === ""){
       alert("Vui lòng  nhập số vào::::: ");
       return ;
    }
    if(Number(soDuong)>0){
        stringHTML="Là Số Dương";
    }
    else if(Number(soDuong)===0){
        stringHTML="Không dương cũng không âm";
    }
    else{
         stringHTML="Là số Âm";
    }

    document.getElementById("ketQua").innerHTML=stringHTML;

} 
//  BÀI 2
document.getElementById("CheckAge").onclick = function(){
    let Tuoi =document.getElementById("Age").value;
    let info ="";
    if(Tuoi===""){
        alert("Vui long nhap tuoi");
        return ;
    }
    if(Tuoi<=0){
        info=" Vui long nhập lại tuổi lớn hơn 1";   
    }
    else if(Tuoi >= 6 ){
        info=" Đủ tuổi vào lớp 1 :)";   

    }
    else{
        info = "Không đủ tuổi vào lớp 1 :)";
  
    }
    document.getElementById("ketQuaAge").innerHTML =info;
}
// BÀI 3
document.getElementById("CheckAgeDriver").onclick = function(){
    let Tuoi =document.getElementById("AgeDriver").value;
    let info ="";
    if(Tuoi===""){
        alert("Vui long nhap tuoi người lái xe");
        return ;
    }
    if(Tuoi<=0){
        info=" Vui long nhập lại tuổi lớn hơn 1";   
    }
    else if(Tuoi >= 16 ){
        info=" Đủ lái xe :)";   

    }
    else{
        info = "Không đủ tuổi lái xe :)";
  
    }
    document.getElementById("ketQuaAgeDriver").innerHTML =info;
}
// BÀI 5


document.getElementById("xuli").onclick = function (){
    let sanPham = document.getElementById("sanPham").value;
    let KetQua = "";
    const phantram = 0.1;
    const price = 50000;

    if(sanPham===""){
        alert(" Vui long nhap san  pham ");
        return ;
    }
    if(Number(sanPham)<0){
        alert("Vui long nhập lớn  hơn 0");
        return ;
    }

    if(Number(sanPham)>=100){
        KetQua=(Number(sanPham)*phantram*price).toLocaleString();
    }
     else{
        KetQua="Không được thưởng do chưa đạt doanh số !";
     }

     document.getElementById("Give").innerHTML=KetQua;

}
//  BÀI 6
document.getElementById("tinh").onclick = function(){
    let money = document.getElementById("Thanhtoan").value;
    let output="";
    const chietkhau = 0.2;
    if(money === ""){
        alert(" Vui long nhap tiên thanh toán");
        return ;
    }
    if(Number(money)<0){
        alert("Vui long nhập tiền thanh toán lớn  hơn 0");
        return ;
    }

    if(Number(money)>=500){
        output = (Number(money)*chietkhau).toLocaleString();
    }
    else{
        output ="Không được nhận chiết khấu ";
    }
    document.getElementById("chietkhau").innerHTML=output;
}
//  BÀI 7
document.getElementById("CheckMonth").onclick = function(){
    let thang= Number(document.getElementById("thang").value);
    let season = "";

    switch(thang){
        case 1:
        case 2:
        case 3:
            season="Mùa Xuân";
            break;

        case 4:
        case 5:
        case 6:
            season="Thu";
            break;
        case 7:
        case 8:
        case 9:
            season="Hạ";
            break;
        case 10:
        case 11:
        case 12:
            season="Đông";
            break;
        default:{
            alert("chỉ nằm thù tháng 1-> 12");
        }
       
    }

    document.getElementById("mua").innerHTML=season;
}
//Bài 8

function handChange() {
    let ele = document.getElementById("select").value;
    let kq = document.getElementById("kq-1");

    if (ele === "") {
        kq.textContent = "";
    } else if (ele === "normal") {
        kq.textContent = "normal";
    } else if (ele === "eco") {
        kq.textContent = "eco";
    } else if (ele === "sport") {
        kq.textContent = "Sport";
    } else {
        kq.textContent = "Không xác định";
    }
}
