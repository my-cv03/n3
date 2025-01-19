const view = document.querySelector(".btn");
view.addEventListener("click", function () {
  const hidden = document.querySelector(".hidden");
  const viewless = document.querySelector(".input");
  const text = document.querySelector(".mt-1");
  const input = document.querySelector(".mt-3").value.toLocaleLowerCase(); // chuyển giá trị nhập vào input sang chữ thường
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const check = input.match(regex); // kiểm tra định dạng email

  if (check) {
    hidden.style.display = "block";
    viewless.style.display = "none";
  } else {
    text.innerHTML = "Bạn nhập sai rồi";
    text.style.Color = "red";
  }
});

// CHỨC NĂNG ẨN THÔNG TIN NGHỀ NGHIỆP
//  kinh nghiệm
function view_mouse_1(element) {
  const viewmouse = element.querySelector(".btn-1"); // Hàm hiển thị nút View More khi hover
  viewmouse.style.visibility = "visible";
}

function view_out_1(element) {
  const viewout = element.querySelector(".btn-1"); // Hàm ẩn nút View More
  viewout.style.visibility = "hidden";
}

function view_click_1(element) {
  const class2 = document.querySelector(".class2"); // ẩn hiện thông tin phần kinh nghiệm
  const checks = element.innerHTML.includes("More");
  if (checks) {
    element.innerHTML = "View Less";
    class2.style.display = "block";
  } else {
    element.innerHTML = "View More";
    class2.style.display = "none";
  }
}

// học vấn
function view_mouse_2(element) {
  const viewmouse = element.querySelector(".btn-2");
  viewmouse.style.visibility = "visible";
}

function view_out_2(element) {
  const viewout = element.querySelector(".btn-2");
  viewout.style.visibility = "hidden";
}

function view_click_2(element) {
  const class4 = document.querySelector(".class4");
  const checks = element.innerHTML.includes("More");
  if (checks) {
    element.innerHTML = "View Less";
    class4.style.display = "block";
  } else {
    element.innerHTML = "View More";
    class4.style.display = "none";
  }
}

// hoạt động
function view_mouse_3(element) {
  const viewmouse = element.querySelector(".btn-3");
  viewmouse.style.visibility = "visible";
}

function view_out_3(element) {
  const viewout = element.querySelector(".btn-3");
  viewout.style.visibility = "hidden";
}

function view_click_3(element) {
  const class6 = document.querySelector(".class6");
  const checks = element.innerHTML.includes("More");
  if (checks) {
    element.innerHTML = "View Less";
    class6.style.display = "block";
  } else {
    element.innerHTML = "View More";
    class6.style.display = "none";
  }
}

//sở thích
function view_mouse_4(element) {
  const viewmouse = element.querySelector(".btn-4");
  viewmouse.style.visibility = "visible";
}

function view_out_4(element) {
  const viewout = element.querySelector(".btn-4");
  viewout.style.visibility = "hidden";
}

function view_click_4(element) {
  const class8 = document.querySelector(".class-box");
  const checks = element.innerHTML.includes("More");
  if (checks) {
    element.innerHTML = "View Less";
    class8.style.display = "block";
  } else {
    element.innerHTML = "View More";
    class8.style.display = "none";
  }
}

// ngôn ngữ
function view_mouse_5(element) {
  const viewmouse = element.querySelector(".btn-5");
  viewmouse.style.visibility = "visible";
}

function view_out_5(element) {
  const viewout = element.querySelector(".btn-5");
  viewout.style.visibility = "hidden";
}

function view_click_5(element) {
  const class10 = document.querySelector(".class10");
  const checks = element.innerHTML.includes("More");
  if (checks) {
    element.innerHTML = "View Less";
    class10.style.display = "block";
  } else {
    element.innerHTML = "View More";
    class10.style.display = "none";
  }
}

// kỹ năng
function view_mouse_6(element) {
  const viewmouse = element.querySelector(".btn-6");
  viewmouse.style.visibility = "visible";
}

function view_out_6(element) {
  const viewout = element.querySelector(".btn-6");
  viewout.style.visibility = "hidden";
}

function view_click_6(element) {
  const class12 = document.querySelector(".class12");
  const checks = element.innerHTML.includes("More");
  if (checks) {
    element.innerHTML = "View Less";
    class12.style.display = "block";
  } else {
    element.innerHTML = "View More";
    class12.style.display = "none";
  }
}
