// content.js
jQuery.expr[":"].regex = function (elem, index, match) {
  var matchParams = match[3].split(","),
    validLabels = /^(data|css):/,
    attr = {
      method: matchParams[0].match(validLabels)
        ? matchParams[0].split(":")[0]
        : "attr",
      property: matchParams.shift().replace(validLabels, ""),
    },
    regexFlags = "ig",
    regex = new RegExp(
      matchParams.join("").replace(/^\s+|\s+$/g, ""),
      regexFlags
    );
  return regex.test(jQuery(elem)[attr.method](attr.property));
};

var $recipeContainer = $("div:regex(id, recipe-container)");

if ($recipeContainer.offset() !== undefined) {
  // console.log($recipeContainer);
  var $container = $("html,body");
  $container.animate(
    {
      scrollTop:
        $recipeContainer.offset().top -
        $container.offset().top +
        $container.scrollTop(),
      scrollLeft: 0,
    },
    100
  );
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
  }
});
