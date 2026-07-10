function upDate(previewPic) {
    // 1. Kiểm tra xem sự kiện hover chuột có kích hoạt không
    console.log("Sự kiện onmouseover đã kích hoạt thành công!");

    // 2. Sử dụng console.log để in ra thông tin alt và source của ảnh
    console.log("Mô tả (alt):", previewPic.alt);
    console.log("Đường dẫn (src):", previewPic.src);

    // Lấy phần tử div lớn có id là 'image'
    let displayDiv = document.getElementById("image");

    // 3. Thay đổi văn bản của phần tử div lớn thành thuộc tính alt của ảnh nhỏ
    displayDiv.innerHTML = previewPic.alt;

    // 4. Thay đổi hình nền của phần tử div lớn thành thuộc tính src của ảnh nhỏ
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Kiểm tra xem sự kiện rời chuột có kích hoạt không
    console.log("Sự kiện onmouseout đã kích hoạt thành công!");

    // Lấy phần tử div lớn có id là 'image'
    let displayDiv = document.getElementById("image");

    // 1. Cập nhật url hình nền trở lại giá trị rỗng ban đầu url('')
    displayDiv.style.backgroundImage = "url('')";

    // 2. Cập nhật lại văn bản gốc ban đầu cho div lớn
    displayDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}