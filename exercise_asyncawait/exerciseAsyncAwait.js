// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
	.then((response) => response.json())
	.then(console.log);

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
	const [users, posts, albums] = await Promise.all(
		urls.map((url) => fetch(url).then((resp) => resp.json()))
	);
	console.log("users", users);
	console.log("posts", posts);
	console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholdeTYPO.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
];
//////////////////////////////////////////////////////////////////

// SOLUTION #1
async function fetchUser() {
	const url = await fetch("https://jsonplaceholder.typicode.com/users/");
	const result = await url.json();
	console.log(result);
}

// SOLUTION #2

// SOLUTION #3

const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholdeTYPO.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map(async function (url) {
				const response = await fetch(url);
				return response.json();
			})
		);
		console.log("users", users);
		console.log("posts", posts);
		console.log("albums", albums);
	} catch (err) {
		console.log(err, "ooooooops!!!");
	}
};

// SOLUTION WITH "FOR AWAIT OF" LOOP

const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
];

const getData2 = async function () {
	const arrayOfPromises = urls.map((url) => fetch(url));
	for await (const element of arrayOfPromises) {
		const jsonFiles = await element.json();
		console.log(jsonFiles);
	}
};
