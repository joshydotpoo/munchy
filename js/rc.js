function initRecipeCards() {
  $(".rc_preview").click(function() {window.location="view_recipe.html"});
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
