async function main() {
  // create HTML elements
  function createHTMLElement(node, className, parent, src = null) {
    const element = document.createElement(node);
    element.classList.add(className);
    if (node === "img" && src !== null) {
      element.src = src;
    }
    parent.appendChild(element);
  }

  // Navigation bar
  createHTMLElement(
    "img",
    "menu-burger-img",
    document.querySelector(".menu-burger"),
    "assets/images/menu-burger.png"
  );
  createHTMLElement(
    "img",
    "youtube-logo",
    document.querySelector(".logo-youtube"),
    "assets/images/youtube-logo.png"
  );
  createHTMLElement(
    "img",
    "mic-img",
    document.querySelector(".mic-img-div"),
    "assets/images/microphone.png"
  );
  createHTMLElement(
    "img",
    "cam-img",
    document.querySelector(".cam-img-div"),
    "assets/images/video-camera.png"
  );
  createHTMLElement(
    "img",
    "notif-img",
    document.querySelector(".notif-img-div"),
    "assets/images/notification.png"
  );
  createHTMLElement(
    "img",
    "profile-picture-icon",
    document.querySelector(".profile-picture-icon-div"),
    "assets/images/user.png"
  );
  createHTMLElement(
    "img",
    "search-btn-icon",
    document.querySelector(".search-btn"),
    "assets/images/search.png"
  );
  // Lateral men
  createHTMLElement(
    "div",
    "home-img-and-text",
    document.querySelector(".lateral-menu")
  );
  createHTMLElement(
    "img",
    "home-svg",
    document.querySelector(".home-img-and-text"),
    "assets/images/bouton-daccueil.jpg"
  );
  createHTMLElement(
    "div",
    "shorts-img-and-text",
    document.querySelector(".lateral-menu")
  );
  createHTMLElement(
    "img",
    "shorts-svg",
    document.querySelector(".shorts-img-and-text"),
    "assets/images/shorts.png"
  );
  createHTMLElement(
    "div",
    "subscriptions-img-and-text",
    document.querySelector(".lateral-menu")
  );
  createHTMLElement(
    "img",
    "subscribe-svg",
    document.querySelector(".subscriptions-img-and-text"),
    "assets/images/subscription.png"
  );
  createHTMLElement(
    "div",
    "you-img-and-text",
    document.querySelector(".lateral-menu")
  );
  createHTMLElement(
    "img",
    "you-svg",
    document.querySelector(".you-img-and-text"),
    "assets/images/you.png"
  );

  // fetch data
  async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  }

  // store data
  const data = await getData();

  // select card container from HTML
  const cardContainer = document.querySelector(".card-container");

  // create card function
  function createCard(video) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img class="card-img" src="${video.image}" alt="${video.name}">
    <h1>${video.name}</h1>
    <h2>${video.autor}</h2>
    <h3>${video.view}</h3>
    `;

    cardContainer.appendChild(card);
  }

  // display videos
  data.forEach((video) => createCard(video));

  //Input search
  let inputText = "";
  const searchBar = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");

  searchBar.addEventListener("change", (event) => {
    inputText = event.target.value;
  });

  searchBtn.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    const formatedSearch = inputText.toUpperCase().trim();
    const filterVideoList = data.filter((video) =>
      video.name.toUpperCase().includes(formatedSearch)
    );
    filterVideoList.forEach((video) => {
      createCard(video);
    });
  });

  // Filters function
  function FilterVideo(filter) {
    cardContainer.innerHTML = "";

    if (filter === "all") {
      data.forEach((video) => createCard(video));
    } else {
      const filteredVideoList = data.filter((video) => video.filter === filter);
      filteredVideoList.forEach((video) => createCard(video));
    }
  }

  // Filter buttons

  const noFilterActive = document.querySelector(".all");
  const filterButtonCute = document.querySelector(".cute");
  const filterButtonGoofy = document.querySelector(".goofy");
  const filterButtonLove = document.querySelector(".love");
  const filterButtonGang = document.querySelector(".gang");
  const filterPerView = document.querySelector(".view");
  const filterPerAutor = document.querySelector(".autor");

  noFilterActive.addEventListener("click", () => FilterVideo("all"));
  filterButtonCute.addEventListener("click", () => FilterVideo("cute"));
  filterButtonGoofy.addEventListener("click", () => FilterVideo("goofy"));
  filterButtonLove.addEventListener("click", () => FilterVideo("love"));
  filterButtonGang.addEventListener("click", () => FilterVideo("gang"));
  filterPerView.addEventListener("click", () => FilterVideo("view"));
  filterPerAutor.addEventListener("click", () => FilterVideo("autor"));
}

document.addEventListener("DOMContentLoaded", main);
