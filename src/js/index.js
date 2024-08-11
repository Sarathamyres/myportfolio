document.querySelectorAll("button[data-popup]").forEach((button) => {
  button.addEventListener("click", function () {
    const popupId = this.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
    document.body.classList.add('no-scroll')

    document.getElementById('hide').setAttribute('data-popup-id', popupId);
  });
});

document.querySelectorAll('.icone-hide').forEach((hide) => {
  hide.addEventListener('click', function () {
    const popupId = this.getAttribute('data-popup-id');
    document.getElementById(popupId).style.display = "none";
    document.body.classList.remove('no-scroll')
  });
});
