// my ajax using promise

function myAjax(method="GET",url,data=null){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open(method,url,true)
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState === 4){
                resolve(xhr.responseText)
            }else{
                reject(xhr.responseText)
            }
        }
        xhr.send(data)
    })
}