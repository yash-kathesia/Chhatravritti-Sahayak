const verify = document.getElementById("verify");
const approve = document.getElementById("approve");
const status = document.getElementById("status");
let pending = document.getElementById("pending");

verify.addEventListener("click", () => {
  window.alert("Request Sent to Institute");
  const message = "message";

  // Send the message to the target webpage (Page B)
  window.opener.postMessage(message, "*");
});

approve.addEventListener("click", () => {
  approve.style.display = "none";
  verify.style.display = "none";
  sessionStorage.setItem("status", "Approved");
  status.innerHTML = "Approved";
  status.style.background = "green";
});
