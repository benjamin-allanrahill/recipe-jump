// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var $recipeContainer = $("#wprm-recipe-container-10660");
    var $container = $("html,body");

    console.log($recipeContainer);
    $container.animate(
      {
        scrollTop:
          $recipeContainer.offset().top -
          $container.offset().top +
          $container.scrollTop(),
        scrollLeft: 0,
      },
      300
    );
  }
});
