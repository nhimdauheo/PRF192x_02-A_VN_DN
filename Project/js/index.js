function notify() {
    alert("Chào mừng bạn đến với ứng dụng JavaScript đầu tiên");

    //Nhập dữ liệu
    let name = prompt('Hãy nhập tên của bạn');
    let city = prompt('Hãy nhập thành phố bạn đang sống');
    let mobile = prompt('Hãy nhập số điện thoại của bạn');
    let email = prompt('Hãy nhập email của bạn');
    let job = prompt('Hãy nhập công việc của bạn');
    let year = prompt('Hãy nhập năm sinh của bạn');


    //So sánh năm sinh với năm hiện tại
    var c = new Date();
    while (parseInt(year) >= c.getFullYear()) {
        year = prompt('Hãy nhập lại năm sinh của bạn');
    }

    //Tính tuổi
    var age = c.getFullYear() - parseInt(year);

    //in dữ liệu
    document.getElementById("name").innerHTML = "Tên của bạn là: " + name;
    document.getElementById("city").innerHTML = "Thành phố bạn đang sống là: " + city;
    document.getElementById("mobile").innerHTML = "Số điện thoại của bạn là: " + mobile;
    document.getElementById("age").innerHTML = "Tuổi của bạn là: " + age;
    document.getElementById("email").innerHTML = "Email của bạn là: " + email;
    document.getElementById("job").innerHTML = "Công việc của bạn là: " + job;
    document.getElementById("year").innerHTML = "Năm sinh của bạn là: " + year;

    //Hiện button 
    var a = document.getElementById("myButton");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}