function myjsonP(url,jsonCallback,success){
    let script = document.createElement('script')   // create a script element 
    script.src = url + "?callback=" + jsonCallback
    script.type = "text/javascript"
    script.async = true
    window[jsonCallback] = function(data){   // called by the server
        success(data)
    }
    document.appendChild(script)
}

// call myjsonp:

myjsonP("http://someURL...","callback",function(data){
    console.log("here is the data:",data)
})