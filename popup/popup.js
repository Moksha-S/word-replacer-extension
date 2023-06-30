document.addEventListener("DOMContentLoaded", function () {
  var replaceButton = document.getElementById("replace-button");
  replaceButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ replace: true }).then(() => {
      setTimeout(() => {
        chrome.tabs.create({ url: "http://localhost:8080/" });
        window.close();
      }, 1000);
    });
  });
});
