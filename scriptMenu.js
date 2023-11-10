// Cập nhật vị trí của danh sách menu
function updateMenuPosition() {
    // Lấy vị trí của biểu tượng menu
    var rect = menuIcon.getBoundingClientRect();

    // Đặt vị trí của danh sách menu dựa trên vị trí của biểu tượng menu
    menuList.style.top = (rect.bottom + window.scrollY -55) + 'px'; // Điều chỉnh vị trí theo chiều dọc ở đây
    menuList.style.right = (rect.left + window.scrollX -1112) + 'px'; // Điều chỉnh vị trí theo chiều ngang ở đây
}

var list = document.querySelectorAll(".list");
var contents = document.querySelectorAll(".content");

list.forEach((item, index) =>
  item.addEventListener("click", function (e) {
    list.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    contents.forEach((content) => content.style.display = 'none');
    contents[index].style.display = 'block';
  })
);

// Lấy tất cả các liên kết trang
var links = document.querySelectorAll('.list a');
// Thêm sự kiện click vào mỗi liên kết
links.forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('vertical-bar').style.display = 'none';
    });
});

// Thêm sự kiện click vào toàn bộ trang web
document.body.addEventListener('click', function(e) {
    if (e.target.id !== 'c-icon') {
        document.getElementById('vertical-bar').style.display = 'none';
    }
});

// Lấy phần tử HTML của biểu tượng c.png
var cIcon = document.getElementById('c-icon');

// Lấy phần tử HTML của thanh vertical-bar
var verticalBar = document.getElementById('vertical-bar');

// Thêm sự kiện click vào biểu tượng c.png
cIcon.addEventListener('click', function(e) {
    // Lấy vị trí của biểu tượng c.png
    var rect = cIcon.getBoundingClientRect();

    // Đặt vị trí của thanh vertical-bar dựa trên vị trí của biểu tượng c.png
    verticalBar.style.top = (rect.bottom + window.scrollY) + 'px';
    verticalBar.style.left = (rect.left + window.scrollX) + 'px';

    // Hiển thị hoặc ẩn thanh vertical-bar
    if (verticalBar.style.display === 'none') {
        verticalBar.style.display = 'block';
    } else {
        verticalBar.style.display = 'none';
    }
});

// Lấy phần tử HTML của biểu tượng menu
var menuIcon = document.getElementById('menu-icon');

// Lấy phần tử HTML của danh sách menu
var menuList = document.getElementById('menu-list');

// Thêm sự kiện click vào biểu tượng menu
menuIcon.addEventListener('click', function(e) {
    updateMenuPosition();
    // Hiển thị hoặc ẩn danh sách menu
    if (menuList.style.display === 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
});

// Thêm trình nghe sự kiện resize cho cửa sổ
window.addEventListener('resize', updateMenuPosition);
