document.getElementById("font").textContent = "E-TimeCoder";

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
        // Nếu người dùng đã nhập tên đăng nhập và mật khẩu, kích hoạt hiệu ứng xé toạc
        $(".login-wrapper").addClass("tearEffect");
        setTimeout(function() {
            window.location.href = '../Menu/index.html';
  // Chuyển hướng người dùng đến một trang trắng
        }, 2000);
    }
});

// Lấy nút "Đăng nhập bằng Google" và "Đăng nhập bằng Facebook"
var googleLoginButton = document.querySelector('.google');
var facebookLoginButton = document.querySelector('.facebook');

// Thêm sự kiện click vào nút "Đăng nhập bằng Google"
googleLoginButton.addEventListener('click', function(event) {
    event.preventDefault();  // Ngăn chặn hành vi mặc định của nút
    // Chuyển hướng người dùng đến trang "Round Navigation Menu"
    window.location.href = '../Menu/index.html';

});



