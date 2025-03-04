function myName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("My name is Peter Fänge");
            resolve();
        }, 1000);
    })
}

function age() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("I am 36 years old.");
            resolve();
        }, 1000);
    })
}

function location() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("I was born in Pehsawar, Pakistan but now I live in Viken, Sweden.");
            resolve();
        }, 1000);
    })
}

function hobbies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("My hobbies include reading, gaming, gardening, and woordwork.");
            resolve();
        }, 1000);
    })
}

myName()
    .then(() => age())
    .then(() => location())
    .then(() => hobbies())