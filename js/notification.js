const verify = document.getElementById("verify");

verify.addEventListener("click", () => {
  const message = "message";

  // Send the message to the target webpage (Page B)
  window.opener.postMessage(message, "*");
});
