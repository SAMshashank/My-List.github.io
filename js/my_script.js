// draggable
$(function () {
  $("#todoList ul").sortable({
    items: "li:not('.listTitle,.addItem')",
    connectWith: "ul",
    dorpOnEmpty: true,
    placeholder: "emptySpace",
  });
  $("input").keydown(function (e) {
    if (e.keyCode == 13) {
      var item = $(this).val();
      $(this)
        .parent()
        .parent()
        .append("<li>" + item + "</li>");

      $(this).val("");
    }
  });
  //deleting the task
  $("#trash").droppable({
    drop: function (event, ui) {
      ui.draggable.remove();
    },
  });
});

var isNS = navigator.appName == "Netscape" ? 1 : 0;
if (navigator.appName == "Netscape")
  document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
  prompt("Hi I am SAM, How are you? ");
  return false;
}
function mousehandler(e) {
  var myevent = isNS ? e : event;
  var eventbutton = isNS ? myevent.which : myevent.button;
  if (eventbutton == 2 || eventbutton == 3) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
//select content code disable  alok goyal
function killCopy(e) {
  return false;
}
function reEnable() {
  return true;
}
document.onselectstart = new Function("return false");
if (window.sidebar) {
  document.onmousedown = killCopy;
  document.onclick = reEnable;
}
let sam = "This is made by shashank ( SAM LENNON) ";
console.log(sam);
