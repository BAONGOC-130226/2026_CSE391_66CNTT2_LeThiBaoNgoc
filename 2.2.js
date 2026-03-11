const form = document.getElementById("form")

const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const confirm = document.getElementById("confirm")
const terms = document.getElementById("terms")

function showError(id,message){
document.getElementById(id+"Error").innerText = message
}

function clearError(id){
document.getElementById(id+"Error").innerText = ""
}

function validateFullname(){
let regex = /^[A-Za-zÀ-ỹ\s]{3,}$/
if(fullname.value.trim()===""){
showError("fullname","Không được để trống")
return false
}
if(!regex.test(fullname.value)){
showError("fullname","Ít nhất 3 ký tự và chỉ chữ")
return false
}
clearError("fullname")
return true
}

function validateEmail(){
let regex=/^\S+@\S+\.\S+$/

if(email.value.trim()===""){
showError("email","Không được để trống")
return false
}

if(!regex.test(email.value)){
showError("email","Email không hợp lệ")
return false
}

clearError("email")
return true
}

function validatePhone(){
let regex=/^0\d{9}$/

if(!regex.test(phone.value)){
showError("phone","SĐT phải 10 số bắt đầu 0")
return false
}

clearError("phone")
return true
}

function validatePassword(){
let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(!regex.test(password.value)){
showError("password","≥8 ký tự gồm hoa, thường, số")
return false
}

clearError("password")
return true
}

function validateConfirm(){

if(confirm.value!==password.value){
showError("confirm","Mật khẩu không khớp")
return false
}

clearError("confirm")
return true
}

function validateGender(){
let gender=document.querySelector("input[name='gender']:checked")

if(!gender){
document.getElementById("genderError").innerText="Chọn giới tính"
return false
}

document.getElementById("genderError").innerText=""
return true
}

function validateTerms(){
if(!terms.checked){
document.getElementById("termsError").innerText="Phải đồng ý điều khoản"
return false
}

document.getElementById("termsError").innerText=""
return true
}

fullname.addEventListener("blur",validateFullname)
email.addEventListener("blur",validateEmail)
phone.addEventListener("blur",validatePhone)
password.addEventListener("blur",validatePassword)
confirm.addEventListener("blur",validateConfirm)

fullname.addEventListener("input",()=>clearError("fullname"))
email.addEventListener("input",()=>clearError("email"))
phone.addEventListener("input",()=>clearError("phone"))
password.addEventListener("input",()=>clearError("password"))
confirm.addEventListener("input",()=>clearError("confirm"))

form.addEventListener("submit",function(e){

e.preventDefault()

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateTerms()

if(valid){
form.style.display="none"

document.getElementById("success").innerHTML =
"Đăng ký thành công 🎉 <br> Xin chào "+fullname.value
}

})