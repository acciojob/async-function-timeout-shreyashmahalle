//your JS code here. If required.
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
	return res.json();
})
.then((data) => {
	return data.json();
})
.catch((log) => {
	return log.json();
})