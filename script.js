

const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});
const pins = document.querySelectorAll(".pin");
const placeTitle = document.getElementById("placeTitle");
const placeFloor = document.getElementById("placeFloor");
const placeRoom = document.getElementById("placeRoom");
const placeDescription = document.getElementById("placeDescription");

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    placeTitle.textContent = pin.dataset.title;
    placeFloor.textContent = pin.dataset.floor;
    placeRoom.textContent = pin.dataset.room;
    placeDescription.textContent = pin.dataset.description;
  });
});
function toggleMenu() {
  document.getElementById("slideMenu").classList.toggle("active");
}
function toggleMenu() {
  document.getElementById("slideMenu").classList.toggle("active");
}
  //ここからprojectのJS
function openMenu() {
  document.getElementById('menuOverlay').classList.add('open');
}

function closeMenu() {
  document.getElementById('menuOverlay').classList.remove('open');
}

function toggleDetail(id) {
  const detail = document.getElementById('detail-' + id);
  const card = detail.previousElementSibling;
  const isOpen = detail.classList.contains('open');

  const grid = card.parentElement;

  grid.querySelectorAll('.project-detail.open').forEach(el => {
    el.classList.remove('open');
    el.previousElementSibling.classList.remove('active');
  });

  if (!isOpen) {
    detail.classList.add('open');
    card.classList.add('active');
  }
}

document.getElementById("searchBox").addEventListener("keyup", function(){
  const keyword = this.value.toLowerCase().replace(/[−ー–—]/g,"-");

  document.querySelectorAll(".project-card").forEach(card => {
    const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
    const classTag = card.querySelector(".class-tag")?.textContent.toLowerCase().replace(/[−ー–—]/g,"-") || "";
    const detail = card.nextElementSibling;
    const hit = title.includes(keyword) || classTag.includes(keyword);

    card.style.display = hit ? "" : "none";

    if(detail && detail.classList.contains("project-detail")){
      if(hit){
        detail.style.display = "";
      }else{
        detail.classList.remove("open");
      }
    }
  });
});