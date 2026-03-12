

function getData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = true  

            if(success){
                resolve("Lấy dữ liệu thành công")
            }else{
                reject("Lỗi khi lấy dữ liệu")
            }

        },2000)

    })
}


getData()
.then(function(data){
    console.log(data)
    return "Xử lý bước 1"
})
.then(function(step1){
    console.log(step1)
    return "Xử lý bước 2"
})
.then(function(step2){
    console.log(step2)
})
.catch(function(error){
    console.log("Đã xảy ra lỗi:", error)
})



function readFileCallback(callback){
    setTimeout(()=>{
        callback("Đọc file thành công")
    },1000)
}

function readFilePromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Đọc file thành công")
        },1000)
    })
}


readFilePromise()
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})

