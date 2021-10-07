/**
 *      Bài 1: Tính tiền lương nhân viên
 * Khối 1:
 *  -lươngNgay
 *  -soNgayLam
 *  -luongThang
 * Khối 2:
 *  B1: tạo biến và gán giá trị
 *  B2: Tính tổng số lương nhân viên trong 1 thang
 *          luonThang = luongNgay * soNgayLam;
 * Khối 3:
 *  -luongThang
*/
function tienLuong(){
    //Lấy giá trị từ form
    var number1 = document.getElementById("luongNgay").value;
    var number2 = document.getElementById("ngayLam").value;
    console.log(number1,number2);
    //Tính tiền lương
    var tienLuong =Number(number1) * Number(number2);
    console.log(tienLuong   );
    document.getElementById("txtLuong").innerHTML = "Tiền lương nhân viên là: "+tienLuong;
}
document.getElementById("btnLuong").onclick = tienLuong;

/**
 *      Bài 2: Tính giá trị trung bình
 * Khối 1: 
 *  -soThuNhat
 *  -soThuHai
 *  -soThuBa
 *  -soThuTu
 *  -soThuNam
 * Khối 2:
 * B1: Tạo các biến và lấy giá trị từ form
 * B2: Tính giá trị trung bình
 *      giaTriTtrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
 * Khối 3:
 * -giaTriTrungBinh
 */
function giaTriTrungBinh(){
    //Lấy giá trị từ form
    var soThuNhat = document.getElementById("num1").value;
    var soThuHai = document.getElementById("num2").value;
    var soThuBa = document.getElementById("num3").value;
    var soThuTu = document.getElementById("num4").value;
    var soThuNam = document.getElementById("num5").value;
    console.log(soThuNhat,soThuHai,soThuBa,soThuTu,soThuNam);
    //Tính giá trị trung bình
    var giaTriTrungBinh = (Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam)) / 5;
    console.log(giaTriTrungBinh);
    document.getElementById("txtTrungBinh").innerHTML = "Giá trị trung bình là: "+giaTriTrungBinh;
}
document.getElementById("btnTrungBinh").onclick = giaTriTrungBinh;

/**
 *      Bài 3: Quy đổi tiền
 * Khối 1: 
 *  -soTienUSD
 * Khối 2:
 * B1: Tạo các biến lấy giá trị từ form
 * B2: Tính số tiền VND quy đổi
 *      soTienVND = soTienUSD * 23.500;
 * Khối 3:
 *  -soTienVND
 */
function soTienVND(){
    //Lấy giá trị từ form
    var soTienUSD = document.getElementById("soUSD").value;
    console.log(soTienUSD);
    //Tính số tiền VND quy đổi được
    var soTienVND = Number(soTienUSD) * 23500;
    console.log(soTienVND);
    document.getElementById("txtVND").innerHTML = "Số tiền quy đổi là: "+new Intl.NumberFormat('vn-VN').format(soTienVND)+"VNĐ";
}
document.getElementById("btnVND").onclick = soTienVND;

/**
 * Bài 4:   Tính diện tich, chu vi hình chữ nhật
 * Khối 1:
 * -chieuDai
 * -chieuRong
 * Khối 2:
 * B1:Tạo các biến lấy giá trị từ form
 * B2: Tính diện tích và chu vi hình chữ nhật
 *      dienTich = chieuDai * chieuRong;
 *      chuVi = (chieuDai + chieuRong) * 2;
 * Khối 3:
 * -dienTich
 * -chuVi
 */
function perimeterOfRec(length,width){
    var perimeter = (length + width) * 2;
    return perimeter;
}
function areaOfRec(length,width){
    var area = length * width;
    return area;
}
document.getElementById("btnTinh").addEventListener("click",function(){
    var number01 = document.getElementById("length").value;
    var number02 = document.getElementById("width").value;

    var length = Number(number01), width = Number(number02);

    var perimeter = perimeterOfRec(length,width);
    document.getElementById("perimeter").value = perimeter;

    var area = areaOfRec(length,width);
    document.getElementById("area").value = area;
})
/**
 *      Bài 5: Tính tổng hai ký số
 * Khối 1:
 * -soHaiChuSo = n;
 * Khối 2:
 * B1: Tạo các biến và lấy giá trị từ form
 * B2: Tính tổng hai ký số
 *      ten = Math.floor(n/10);
 *      unit = n%10;
 *      sum = ten + unit;
 * Khối 3:
 * -sum
 */
function sumNumber(){
    //Lấy giá trị từ form
    var soHaiChuSo = document.getElementById("number").value;
    console.log(soHaiChuSo);
    //Tính tổng hai ký số
    var sum = Math.floor(soHaiChuSo/10) + (soHaiChuSo%10);
    console.log(sum)
    document.getElementById("txtSum").innerHTML = "Tổng hai ký số là: "+sum;
}
document.getElementById("btnSum").onclick = sumNumber;