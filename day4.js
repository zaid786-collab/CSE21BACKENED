// create one promise that will display user name and password :
// using resolve and if data wii be rejected its display error : 

new Promise(() => {
    setTimeout( () => {
        let err = true;
        if(!err) {
            resolve("user : CSE21,passwword : 1234");
        }else {
            PromiseRejectionEvent("ERROR... data fail")
        }
    })
}).then().catch()