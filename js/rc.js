function initRecipeCards() {
  var initUser = getUser();
  $(".rc").click(function() {
    window.location = $(this).data("link");
  });
  $(".rc").each(function(index) {
    var title = $(this).find(".rcm_title").html();
    if(initUser.isBookmarked(title)) {
      toggleBookmark($(this).find(".rca_bookmark"));
    }
  });
  $(".rca_bookmark").click(function() {
    var activeBM = $(this).hasClass("activeBM");
    if (activeBM) {
      $(this).removeClass("activeBM");
      $(this)
        .children("i")
        .html("bookmark_border")
        .css("color", "#3e3e42");
        getUser().removeBookmark($(this).parents(".rc").find(".rcm_title").html());
    } else { // activate
      $(this).addClass("activeBM");
      $(this)
        .children("i")
        .html("bookmark")
        .css("color", "#E0115F");
      // var rc_data = createRCObject($(this).parents(".rc"));
      // localStorage.setItem(rc_data.title, JSON.stringify(rc_data));
      getUser().addBookmark($(this).parents(".rc").find(".rcm_title").html());
    }
  });
}
function createRCObject(card) {
  var t = card.find(".rcm_title").html();
  var d = card.find(".rcm_desc").html();
  var p = card.find(".rcp_propic").css("background-image");
  return { title: t, desc: d, propic: p };
}
function toggleBookmark(bookmark) {
  var activeBM = bookmark.hasClass("activeBM");
  if (activeBM) { // remove
    bookmark.removeClass("activeBM");
    bookmark
      .children("i")
      .html("bookmark_border")
      .css("color", "#3e3e42");
  } else { // add
    bookmark.addClass("activeBM");
    bookmark.children("i").html("bookmark").css("color", "#E0115F");
  }
}
function addAllRC(recipesString) {
  var recipes = recipesString.split("|");
  for(var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];
    var recipeData = recipe.split(":");
    createRC(recipeData[0], recipeData[1], recipeData[2]);
  }
}
function createRC(title, imagePath, recipeLink) {
  imagePath = "recipes/" + imagePath;
  recipeLink = "recipes/" + recipeLink;
  var rcHTML = "<div class='rc' data-link='"+recipeLink+"'><div class='rc_preview' style='background-image: url("+imagePath+")'><div class='rcp_propic'></div></div><div class='rc_main'><div class='rcm_title'>"+title+"</div><div class='rcm_desc'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin</div></div><div class='rc_action'><div class='rca_bookmark'><i class='material-icons'>bookmark_border</i></div></div></div>";
  $(".container").append(rcHTML);
}
