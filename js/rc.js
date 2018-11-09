function initRecipeCards() {
  $(".rca_bookmark").click(function() {
    var activeBM = $(this).hasClass("activeBM");
    if (activeBM) {
      $(this).removeClass("activeBM");
      $(this)
        .children("i")
        .html("bookmark_border")
        .css("color", "#3e3e42");
    } else { // activate
      $(this).addClass("activeBM");
      $(this)
        .children("i")
        .html("bookmark")
        .css("color", "#E0115F");
      var rc_data = createRCObject($(this).parents(".rc"));
      localStorage.setItem(rc_data.title, JSON.stringify(rc_data));
      
    }
  });
}
function createRCObject(card) {
  var t = card.find(".rcm_title").html();
  var d = card.find(".rcm_desc").html();
  var p = card.find(".rcp_propic").css("background-image");
  return { title: t, desc: d, propic: p };
}
