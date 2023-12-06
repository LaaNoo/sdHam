//Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo. Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó. Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.


function bai5(a){

    for (let i = 0 ;  i < arguments.length; i++){
       
            if (a == arguments[i]){
               return alert(arguments[(arguments[i].length-1)]);
            

            } else {
               return alert("Không tồn tại tên ngôi sao nào");
            }
    
    }

}

bai5(prompt("nhập vào tên ngôi sao"));

let ngoiSao = [ "Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let chomSao = ["Ursa Minor","Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

              
bai5(ngoiSao);



