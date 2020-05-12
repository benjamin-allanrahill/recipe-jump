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

const scrollTo = ($recipeContainer) => {
  // console.log($recipeContainer);
  var $container = $("html,body");
  if ($recipeContainer.length !== 0) {
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
};

var $recipeContainer = $("div:regex(id, recipe-container)");
var $tastyRecipeContainer = $("div:regex(id, tasty-recipe)");
console.log("THis is the recipe button");
var $jumpToRecipe = $("a").filter(() => {
  var match = $(this).text().match(/^jump/);
  console.log(match);
  return match;
});
console.log($jumpToRecipe);

if ($recipeContainer.length !== 0) {
  console.log("found it");
  scrollTo($recipeContainer);
} else if ($tastyRecipeContainer.length !== 0) {
  console.log($tastyRecipeContainer);
  scrollTo($tastyRecipeContainer);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
  }
});
