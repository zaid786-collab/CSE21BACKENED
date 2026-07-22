function add(num1,num2) {
console.log("Addition ",num1+num2);
}
add(2,1);

// Function with return value 
function mul(num1,num2) {
    return num1*num2;
}
console.log("Multiplication : ",mul(3,7));

// Arrow Function : 
// syntax : fname=() => {}

    const ml=(num1,num2,num3) => {
        console.log("Multiplication : ",num1*num2*num3);
    }

    ml(1,2,3);

    // arguments : array like object
    // arguments do not work in arrow functions as dom will not work in backened it will work only on browser and frontend.

    const ni = () => {
        console.log(arguments);
    }
    ni("zaid");

    // Synchronous and Asynchronous Programming : 

    // console.log("Java Script");
    // function hello() {
    //     console.log("Hello World");
    // }
    // hello();
    // console.log("This is Synchronous Programming");

    const hello = () => {
        setTimeout( () => {
            console.log("Hello,World!");
        },2000);
    }
    console.log("This is asynchronous Programming");
    hello();

