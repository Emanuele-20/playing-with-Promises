// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
    if (true){
        resolve("We have a resolved promise here !!!"); 
    } else {
        reject("rejected");
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hi")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Pookieeee !!!!")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Here what you are looking for !!!!")
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values)
})



//Now the promise is created, but how we can run that promise

promise.then(result => {
    console.log(result)
})

promise.then(result => result + "!").then(result2 => console.log(result2))


//###########################################################

const promise1 = new Promise((resolve, reject) => {
    if(true){
        setTimeout(resolve, 4000, "success")  
    }
})

promise1.then(result => {
    console.log(result)
})

//###########################################################

const promise3 = Promise.resolve(
    setTimeout(() => {
    console.log("success");
    }, 4000 )
)
//###########################################################

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log("MMMMMMMmmmmm !!!!"))

