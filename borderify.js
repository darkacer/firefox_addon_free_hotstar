// about:debugging in firefox

document.body.style.border = "5px solid green";


// var cookies = document.cookie;
// console.log(cookies)

var localStorage = window.localStorage;
console.log(localStorage);


setInterval(function() {
        localStorage.clear();
    }, 0);

    setInterval(function() {
        window.location.reload();
    }, 40000);

