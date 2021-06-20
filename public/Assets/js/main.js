
const resMenuActive = () => {
  const links = document.getElementById('links')
  links.classList.add('sidebar')

}
const closeNav = () => {
  const links = document.getElementById('links')
  links.classList.remove("sidebar");

}

const resBitFormMenuActive = () => {
  const bitlinks = document.getElementById('bitform-links')
  bitlinks.classList.add('sidebar')

}
const bitFormCloseNav = () => {
  const bitlinks = document.getElementById('bitform-links')
  bitlinks.classList.remove("sidebar");

}
const resBitIntegratorMenuActive = () => {
  const bitlinks = document.getElementById('bit-integrator-links')
  bitlinks.classList.add('sidebar')

}
const bitIntegratorCloseNav = () => {
  const bitlinks = document.getElementById('bit-integrator-links')
  bitlinks.classList.remove("sidebar");

}

$('#play-video').on('click', function (e) {
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" class="intro-video" height="315" src="https://www.youtube.com/embed/Kdu3f8wLsrk" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

const openTab = (e, tab) => {
  let i, tabContent, btns
  tabContent = document.getElementsByClassName("tab-content")
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none"
  }
  btns = document.getElementsByClassName("intro-btn");
  for (i = 0; i < btns.length; i++) {
    btns[i].className = btns[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  e.currentTarget.className += " active";

}



let toggles = document.getElementsByClassName("faq-toggle");
let contentDiv = document.getElementsByClassName("faq-content");
let icons = document.getElementsByClassName("fa-icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#000";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#000";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");

      contentDiv[i].classList.remove("heightActive");
      contentDiv[i].classList.add("heightActive");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.color = "#000";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}



















