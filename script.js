fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // convert to JSON
  .then((data) => {
    const userList = document.getElementById("userList");
    data.forEach((user) => {
      const div = document.createElement("div");
      div.innerHTML = `${user.name} — ${user.email}`;
      userList.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });