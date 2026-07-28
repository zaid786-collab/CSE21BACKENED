// create one promise that will display user name and password :
// using resolve and if data wii be rejected its display error : 

new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;

        if (err) {
            resolve("User: CSE21, Password: 1234");
        } else {
            reject("ERROR... Data failed");
        }
    }, 2000);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});