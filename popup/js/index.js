document.getElementById("linkedin-button").addEventListener("click", () => {
  params = {
    active: true,
    url: "https://www.linkedin.com/in/benjaminallanrahill/",
  };
  chrome.tabs.create(params);
});

document.getElementById("bar-button").addEventListener("click", () => {
  params = {
    active: true,
    url: "https://benallanrahill.com",
  };
  chrome.tabs.create(params);
});
