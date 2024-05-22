document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử tooltip,csspng
    var tooltip = document.querySelector('.tooltip-languages');
    var csspng = document.querySelector('.csspng-languages img');
    // Lấy các phần tử img
    var img1 = document.querySelector('.img1-languages');
    var img2 = document.querySelector('.img2-languages');
    var img3 = document.querySelector('.img3-languages');
    var img4 = document.querySelector('.img4-languages');
    var img5 = document.querySelector('.img5-languages');
    var img6 = document.querySelector('.img6-languages');
    var img7 = document.querySelector('.img7-languages');
    var img8 = document.querySelector('.img8-languages');
    var img9 = document.querySelector('.img9-languages');
    var img10 = document.querySelector('.img10-languages');
    var img11 = document.querySelector('.img11-languages');
    // Lấy phần tử user-languages
    var userLanguages = document.querySelectorAll('.user-languages');
    // Ẩn tooltip ban đầu
    tooltip.style.display = 'none';
    // Thêm sự kiện click cho phần tử csspng
    csspng.addEventListener('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        // Khi nhấp chuột, hiển thị hoặc ẩn tooltip
        if (tooltip.style.display === 'none') {
            tooltip.style.display = 'block';
        } else {
            tooltip.style.display = 'none';
        }
    });
    // Thêm sự kiện click cho phần tử img
    img1.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img1.dataset.src; // Thay đổi hình ảnh của csspng
    });
    
    img2.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img2.dataset.src; 
    });
    img3.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img3.dataset.src; 
    });
    img4.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img4.dataset.src; 
    });
    img5.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img5.dataset.src; 
    });
    img6.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img6.dataset.src; 
    });
    img7.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img7.dataset.src; 
    });
    img8.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img8.dataset.src; 
    });
    img9.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img9.dataset.src; 
    });
    img10.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img10.dataset.src; 
    });
    img11.addEventListener('click', function(event) {
        event.stopPropagation();
        tooltip.style.display = 'none'; 
        csspng.src = img11.dataset.src; 
    });
    // Thêm sự kiện click cho mỗi phần tử .user-languages
    userLanguages.forEach(function(userLanguage) {
        userLanguage.addEventListener('click', function(event) {
             event.stopPropagation();
            tooltip.style.display = 'none'; 
            csspng.src = userLanguage.querySelector('div[data-src]').dataset.src; // Thay đổi hình ảnh của csspng
        });
    });   

    
    // Thêm sự kiện click cho toàn bộ màn hình để tắt tooltip
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.tooltip')) {
            tooltip.style.display = 'none';
        }
    });
});
//Phần IT CODER
var fontElement = document.getElementById("font");
var gifElement = document.createElement("img");
// hình ảnh GIF
gifElement.src = "robot tym.gif";  
gifElement.width = 300;  
gifElement.height = 400;  
gifElement.style.position = "absolute";
gifElement.style.left = "-100px";
gifElement.style.flexShrink = "0";

var divElement = document.createElement("div");
divElement.style.display = "flex";
divElement.style.justifyContent = "space-between";
divElement.style.width = "100%";  

var textNode1 = document.createTextNode("ITㅤCODER");

// Xóa nội dung hiện tại của phần tử "font"
fontElement.textContent = "";

fontElement.appendChild(textNode1);
fontElement.appendChild(gifElement);

// các phần tử con của "font" đều nằm trên cùng một hàng
fontElement.style.display = "flex";
fontElement.style.alignItems = "center";
fontElement.style.justifyContent = "space-between";

//menu
var menuContainer = document.getElementById('menu-container');
var menuList = document.getElementById('menu-list');
var body = document.body;

menuContainer.addEventListener('click', function(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan truyền đến body
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
});

body.addEventListener('click', function() {
    menuList.style.display = "none";
});

