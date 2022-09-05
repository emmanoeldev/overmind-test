const openDialog = () => {
  const $body = $("body");
  $body.setAttribute("data-dialog", "visibility");

  $(".dialog").lastElementChild.addEventListener("click", () => {
    $body.removeAttribute("data-dialog");
  }, false);
}
