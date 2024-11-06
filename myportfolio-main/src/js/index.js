const videos = document.getElementsByTagName('video');
for (let i = 0; i < videos.length; i++) {
    videos[i].muted = true;
}
function playVideo() {
    for (let i = 0; i < videos.length; i++) {
        videos[i].play();
    }
}
function pauseVideo() {
    for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
}

document.querySelectorAll("button[data-popup]").forEach((button) => {
  button.addEventListener("click", function () {
    const popupId = this.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
    document.body.classList.add("no-scroll");

    document.getElementById("hide").setAttribute("data-popup-id", popupId);
  });
});

document.querySelectorAll(".icone-hide").forEach((hide) => {
  hide.addEventListener("click", function () {
    const popupId = this.getAttribute("data-popup-id");
    document.getElementById(popupId).style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});

const iconBars = document.querySelector(".icon-bars");
const inputBars = document.getElementById("bars");
inputBars.addEventListener("change", function () {
  if (inputBars.checked) {
    iconBars.style.color = "rgb(121, 17, 207)";
  } else {
    iconBars.style.color = "";
  }
});
document.addEventListener('scroll', function() {
  if (inputBars.checked) {
    inputBars.checked = false;
  }
})
window.addEventListener('resize', function(){
  if (inputBars.checked) {
    inputBars.checked = false;
  }
})
