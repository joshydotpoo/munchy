function initHeaderNav() {
  $(".hdr_search").click(function() {
    if (!$(".hdr_search").hasClass("active_nav")) {
      $(".hdr_search").toggleClass("active_nav");
      $(".hdrn_item").hide();
      $(".hdr_search")
        .show()
        .css("float", "left");
      $(".hdr_nav").append(
        "<input class='hdr_searchbar' type='text' placeholder='Search for something..'/>"
      );
      $(".hdr_nav").append("<button class='hdr_cancel'>Cancel</button");
      $(".hdr_cancel").on("click", function() {
        $(".hdrn_item").show();
        $(".hdr_search").css("float", "right");
        $(".hdr_searchbar").remove();
        $(".hdr_cancel").remove();
        $(".hdr_search").removeClass("active_nav");
      });
    }
  });

  $(".hdr_account i").click(function() {
    if (!$(".hdr_account").hasClass("active_nav")) {
      $(".hdr_account").toggleClass("active_nav");
      $(".hdrn_item").hide();
      $(".hdr_account")
        .show()
        .css({ float: "left", width: "90px" });
      $(".hdr_account").append(
        "<i class='material-icons hdr_account_back hdr_account_appended' style='float: left'>chevron_left</i>"
      );
      $(".hdr_nav").append(
        "<span class='hdr_account_name hdr_account_appended'>"+localStorage.getItem("username")+"</span>"
      );
      $(".hdr_nav").append(
        "<button class='hdr_account_signout hdr_account_appended'>Sign Out</button>"
      );
      $(".hdr_account_back").on("click", function() {
        $(".hdrn_item").show();
        $(".hdr_account").css({ float: "right", width: "45px" });
        $(".hdr_account_appended").remove();
        $(".hdr_account").removeClass("active_nav");
      });
      $(".hdr_account_signout").on("click", function() {
        localStorage.setItem("username", null);
        window.location = "login.html";
      });
    }
  });
}
