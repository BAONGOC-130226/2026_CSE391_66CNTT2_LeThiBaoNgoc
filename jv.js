alert("JS đang chạy")
const form = document.getElementById("form")

const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm = document.getElementById("confirm")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmError")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let valid = true

    // kiểm tra tên
    if(!name.value.trim()){
        nameError.innerText = "Không được để trống"
        valid = false
    }else nameError.innerText = ""

    // kiểm tra email
    if(!email.value.trim()){
        emailError.innerText = "Không được để trống"
        valid = false
    }else emailError.innerText = ""

    // kiểm tra mật khẩu
    if(password.value.length < 6){
        passwordError.innerText = "Ít nhất 6 ký tự"
        valid = false
    }else passwordError.innerText = ""

    // kiểm tra xác nhận mật khẩu
    if(confirm.value !== password.value){
        confirmError.innerText = "Mật khẩu không khớp"
        valid = false
    }else confirmError.innerText = ""

    if(valid){
        alert("Đăng ký thành công 🎉")
        form.reset()
    }
})