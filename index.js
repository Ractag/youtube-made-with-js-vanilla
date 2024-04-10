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
}

document.addEventListener("DOMContentLoaded", main);

// const cardContainer = document.querySelector(".card-container");
// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // card creation
//     // data.forEach((video) => {
//     //   const card = document.createElement("div");
//     //   card.className = "card";

//     //   card.innerHTML = `
//     //    <img class="card-img" src="${video.image}" alt="${video.name}">
//     //     <h1>${video.name}</h1>
//     //     <h2>${video.autor}</h2>
//     //     <h3>${video.view}</h3>
//     //     `;

//     //   cardContainer.appendChild(card);
//     // });
//     // Listening changes on input and executing on search btn

//     let inputText = "";
//     const searchBar = document.querySelector(".search-input");
//     searchBar.addEventListener("change", (event) => {
//       inputText = event.target.value;
//     });

//     const searchBtn = document.querySelector(".search-btn");
//     searchBtn.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const formatedSearch = inputText.toUpperCase().trim();
//       const filterVideoList = data.filter((video) => {
//         return video.name.toUpperCase().includes(formatedSearch);
//       });

//       filterVideoList.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     // Filter buttons

//     const noFilterActive = document.querySelector(".all");
//     const filterButtonCute = document.querySelector(".cute");
//     const filterButtonGoofy = document.querySelector(".goofy");
//     const filterButtonLove = document.querySelector(".love");
//     const filterButtonGang = document.querySelector(".gang");
//     const filterPerView = document.querySelector(".view");
//     const filterPerAutor = document.querySelector(".autor");

//     noFilterActive.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const shuffledData = shuffle(data);

//       shuffledData.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     filterButtonCute.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const filteredVideos = data.filter((video) => {
//         return video.filter.includes("cute");
//       });

//       filteredVideos.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     filterButtonGoofy.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const filteredVideos = data.filter((video) => {
//         return video.filter.includes("goofy");
//       });

//       filteredVideos.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     filterButtonLove.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const filteredVideos = data.filter((video) => {
//         return video.filter.includes("love");
//       });

//       filteredVideos.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     filterButtonGang.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const filteredVideos = data.filter((video) => {
//         return video.filter.includes("gang");
//       });

//       filteredVideos.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     filterPerAutor.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const filteredVideos = data.sort((a, b) =>
//         a.autor.localeCompare(b.autor)
//       );

//       filteredVideos.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     // Randomize videos (All filter button)

//     filterPerView.addEventListener("click", () => {
//       cardContainer.innerHTML = "";

//       const filteredVideos = data.sort((a, b) => {
//         const regex = /\d+/;
//         const viewA = parseInt(a.view.match(regex)[0]);
//         const viewB = parseInt(b.view.match(regex)[0]);
//         return viewB - viewA;
//       });

//       filteredVideos.forEach((video) => {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//       <img class="card-img" src="${video.image}" alt="${video.name}">
//        <h1>${video.name}</h1>
//        <h2>${video.autor}</h2>
//        <h3>${video.view}</h3>
//        `;

//         cardContainer.appendChild(card);
//       });
//     });

//     // Shuffles an array (Fisher-Yates algorythm)
//     function shuffle(data) {
//       let currentIndex = data.length;

//       // this while loop means if there is still elements in the array, it will iterate on it until there is no more
//       while (currentIndex != 0) {
//         // randomize the index of "currenIndex"
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [data[currentIndex], data[randomIndex]] = [
//           data[randomIndex],
//           data[currentIndex],
//         ];
//       }
//       return data;
//     }
//   });
