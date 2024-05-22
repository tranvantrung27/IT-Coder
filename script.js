var fontElement = document.getElementById("font");
var gifElement = document.createElement("img");

// hình ảnh GIF
gifElement.src = "robot tym.gif";  
gifElement.width = 300;  
gifElement.height = 400;  
gifElement.style.position = "absolute";
gifElement.style.left = "-104px";
gifElement.style.flexShrink = "0";

var divElement = document.createElement("div");
divElement.style.display = "flex";
divElement.style.justifyContent = "space-between";
divElement.style.width = "100%";  

var textNode1 = document.createTextNode("IT ㅤCODER");


// Xóa nội dung hiện tại của phần tử "font"
fontElement.textContent = "";


fontElement.appendChild(textNode1);
fontElement.appendChild(gifElement);


// các phần tử con của "font" đều nằm trên cùng một hàng
fontElement.style.display = "flex";
fontElement.style.alignItems = "center";
fontElement.style.justifyContent = "space-between";

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.add("fa-eye-slash"); 
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash"); 
    }
}
// Lấy nút "Đăng nhập"
var loginButton = document.querySelector('.login-box a');

// Lấy trường nhập tên đăng nhập và mật khẩu
var usernameInput = document.querySelector('#username');
var passwordInput = document.querySelector('#password');

// Lấy phần tử hiển thị lỗi
var usernameError = document.querySelector('#usernameError');
var passwordError = document.querySelector('#passwordError');

// Thêm sự kiện click vào nút "Đăng nhập"
loginButton.addEventListener('click', function(event) {
    event.preventDefault();  // Ngăn chặn hành vi mặc định của nút
    // Kiểm tra xem người dùng đã nhập tên đăng nhập và mật khẩu hay chưa
    if (usernameInput.value === '') {
        // Nếu người dùng chưa nhập tên đăng nhập, hiển thị thông báo
        usernameError.textContent = 'Vui lòng nhập tên đăng nhập!';
    } else if (passwordInput.value === '') {
        // Nếu người dùng chưa nhập mật khẩu, hiển thị thông báo
        passwordError.textContent = 'Vui lòng nhập mật khẩu!';
    } else {

        $(".login-wrapper").addClass("tearEffect");
        
            window.location.href = 'menu.html';
  // Chuyển hướng người dùng đến một trang trắng

    }
});

// Lấy nút "Đăng nhập bằng Google" và "Đăng nhập bằng Facebook"
var googleLoginButton = document.querySelector('.google');
var facebookLoginButton = document.querySelector('.facebook');

// Thêm sự kiện click vào nút "Đăng nhập bằng Google"
googleLoginButton.addEventListener('click', function(event) {
    event.preventDefault();  // Ngăn chặn hành vi mặc định của nút
    // Chuyển hướng người dùng đến trang "Round Navigation Menu"
    window.location.href = 'home.html';

});



