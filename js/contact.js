document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Get existing messages from localStorage (if any)
  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  // Add new message object
  messages.push({ name, email, message });

  // Save updated array back to localStorage
  localStorage.setItem("messages", JSON.stringify(messages));

  document.getElementById("myForm").reset();
  alert("Message saved successfully!");
});
