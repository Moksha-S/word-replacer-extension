document.addEventListener("DOMContentLoaded", function () {
  var replaceButton = document.getElementById("replace-button");
  replaceButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ replace: true }).then(() => {
      setTimeout(() => {
        chrome.tabs.create({ url: "https://www.simform.com/" });
        window.close();
      }, 1000);
    });
  });
});
