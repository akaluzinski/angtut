const content = document.getElementById("content");
const copyBtn = document.getElementById("copy");
copyBtn.onclick = copyToClipboard;

function copyToClipboard() {
  navigator.clipboard
  .writeText(content.innerText)
  .then(() => console.log("Copied to clipboard"))
  .catch((error) => alert(error.message));
}
