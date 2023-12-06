//Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.


function bai3( a ,b ){
   
    if ( a > b ){
       return alert ("a lớn hơn b");
    } else {
        let Tong  = a + b ;
       return alert(Tong);
    }
}

bai3(+prompt("Nhập vào giá trị a"), +prompt("Nhập vào giá trị b"));