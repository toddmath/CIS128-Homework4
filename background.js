$(function () {
  $("#select-background").change(function () {
    $("#no-image").attr("disabled", true);
    $("#no-image").hide();
    if ($("option:selected").val() == 1) {
      backBlue();
    } else if ($("option:selected").val() == 2) {
      backGold();
    }
  });

  function backBlue() {
    $("body").removeClass("lightGold");
    $("body").addClass("lightBlue");
  }

  function backGold() {
    $("body").removeClass("lightBlue");
    $("body").addClass("lightGold");
  }

});