// Get the buttons for "Áo", "Quần", "Giày", "Túi xách", "Dây chuyền", "Tóc", and "Background"
const aoBtn = document.getElementById("shirt");
const quanBtn = document.getElementById("pant");
const giayBtn = document.getElementById("shoes");
const tuiBtn = document.getElementById("bag");
const dayBtn = document.getElementById("necklace");
const tocBtn = document.getElementById("hair");
const nenBtn = document.getElementById("background");

// Get the product sections for "Áo", "Quần", "Giày", "Túi xách", "Dây chuyền", "Tóc", and "Background"
const aoSection = document.getElementById("ao");
const quanSection = document.getElementById("quan");
const giaySection = document.getElementById("giay");
const tuiSection = document.getElementById("tui");
const daySection = document.getElementById("day");
const tocSection = document.getElementById("toc");
const nenSection = document.getElementById("nen");


const btns = document.querySelectorAll(".btn7");
btns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // Lấy đường dẫn đến ảnh background
    const imgSrc = this.parentNode.querySelector(".quan").getAttribute("src");
    // Tìm phần tử có lớp CSS "background"
    const background = document.querySelector(".background");
    // Thêm background vào phần tử đó
    background.style.backgroundImage = `url(${imgSrc})`;
  });
});

// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm áo
aoBtn.addEventListener("click", function() {
    quanSection.classList.add("hidden");
    giaySection.classList.add("hidden");
    tuiSection.classList.add("hidden");
    daySection.classList.add("hidden");
    tocSection.classList.add("hidden");
    nenSection.classList.add("hidden");
    aoSection.classList.remove("hidden");
});

// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm quần
quanBtn.addEventListener("click", function() {
    aoSection.classList.add("hidden");
    giaySection.classList.add("hidden");
    tuiSection.classList.add("hidden");
    daySection.classList.add("hidden");
    tocSection.classList.add("hidden");
    nenSection.classList.add("hidden");
    quanSection.classList.remove("hidden");
});

// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm giày dép
giayBtn.addEventListener("click", function() {
    aoSection.classList.add("hidden");
    quanSection.classList.add("hidden");
    tuiSection.classList.add("hidden");
    daySection.classList.add("hidden");
    tocSection.classList.add("hidden");
    nenSection.classList.add("hidden");
    giaySection.classList.remove("hidden");
});

// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm túi sách
tuiBtn.addEventListener("click", function() {
    aoSection.classList.add("hidden");
    quanSection.classList.add("hidden");
    giaySection.classList.add("hidden");
    daySection.classList.add("hidden");
    tocSection.classList.add("hidden");
    nenSection.classList.add("hidden");
    tuiSection.classList.remove("hidden");
});

// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm dây chuyền
dayBtn.addEventListener("click", function() {
    aoSection.classList.add("hidden");
    quanSection.classList.add("hidden");
    giaySection.classList.add("hidden");
    tuiSection.classList.add("hidden");
    tocSection.classList.add("hidden");
    nenSection.classList.add("hidden");
    daySection.classList.remove("hidden");
});
// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm tóc
tocBtn.addEventListener("click", function() {
    aoSection.classList.add("hidden");
    quanSection.classList.add("hidden");
    giaySection.classList.add("hidden");
    tuiSection.classList.add("hidden");
    daySection.classList.add("hidden");
    nenSection.classList.add("hidden");
    tocSection.classList.remove("hidden");
});

// Ẩn các danh sách sản phẩm khác khi click chọn menu sản phẩm background
nenBtn.addEventListener("click", function() {
    aoSection.classList.add("hidden");
    quanSection.classList.add("hidden");
    giaySection.classList.add("hidden");
    tuiSection.classList.add("hidden");
    daySection.classList.add("hidden");
    tocSection.classList.add("hidden");
    nenSection.classList.remove("hidden");
    
    const imgSrc = this.parentNode.querySelector("img").getAttribute("src");
    
    nenSection.style.backgroundImage = `url(${imgSrc})`;
});

//Tính năng thử đồ
function addProduct(btnSelector, imgSelector, containerSelector, imgClass) {
    const btns = document.querySelectorAll(btnSelector);
    btns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const imgSrc = this.parentNode.querySelector(imgSelector).getAttribute("src");
            const container = document.querySelector(containerSelector);
            container.innerHTML = `<img src="${imgSrc}" alt="" class="${imgClass}">`;
            const img = container.querySelector("img");
            img.classList.add(imgClass);
        });
    });
}

//Thêm hình ảnh vào các element và tao tên class cho nó
addProduct(".btn1", "img", ".bikinitop", "prd");

addProduct(".btn2", "img", ".bikinibottom", "prd");

addProduct(".btn3", "img", ".feet", "prd");

addProduct(".btn4", "img", ".handbag", "prd");

addProduct(".btn5", "img", ".necklace", "prd");

addProduct(".btn6", "img", ".hairstyle", "pr");



// import Data from './..Data.json'

// console.log(Data)

// fetch('Data.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

