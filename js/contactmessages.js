let messages = JSON.parse(localStorage.getItem("messages")) || [];

let container = document.getElementById("messagesContainer");

messages.forEach((msg) => {
  let box = document.createElement("div");
  box.className = "box";
  box.innerHTML = `
        <p><strong>Name:</strong> ${msg.name}</p>
        <p><strong>Email:</strong> ${msg.email}</p>
        <p><strong>Message:</strong> ${msg.message}</p>
      `;
  container.appendChild(box);
});
// Clear button
document.getElementById("clearBtn").addEventListener("click", function () {
  localStorage.removeItem("messages"); // remove all messages
  alert("All messages cleared!");
  location.reload(); // refresh the page
});
