// How to accept user input

// 1. Easy Way = window promt
// 2. Professional Way = HTML Textbox

let username;

// username = window.prompt(`What is your username?`);
// console.log(`${username}`);

document.getElementById("mybtn").onclick = function() {
  username = document.getElementById("myText").value;
  document.getElementById("hed").textContent = `Hello ${username}`;
}
