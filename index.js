const menuBurgerImg = document.createElement("img");
menuBurgerImg.className = "menu-burger-img";
menuBurgerImg.src = "assets/images/menu-burger.png";

const menuBurgerDiv = document.querySelector(".menu-burger");
menuBurgerDiv.appendChild(menuBurgerImg);

const ytLogoImg = document.createElement("img");
ytLogoImg.className = "yt-logo";
ytLogoImg.src = "assets/images/youtube-logo.png";

const ytLogoDiv = document.querySelector(".logo-yt");
ytLogoDiv.appendChild(ytLogoImg);

const micImg = document.createElement("img");
micImg.className = "mic-img";
micImg.src = "assets/images/microphone.png";

const micImgDiv = document.querySelector(".mic-img-div");
micImgDiv.appendChild(micImg);

const camImg = document.createElement("img");
camImg.className = "cam-img";
camImg.src = "assets/images/video-camera.png";

const camImgDiv = document.querySelector(".cam-img-div");
camImgDiv.appendChild(camImg);

const notifImg = document.createElement("img");
notifImg.className = "notif-img";
notifImg.src = "assets/images/notification.png";

const notifImgDiv = document.querySelector(".notif-img-div");
notifImgDiv.appendChild(notifImg);

const profilePicIcon = document.createElement("img");
profilePicIcon.className = "profile-picture-icon";
profilePicIcon.src = "assets/images/user.png";

const profilePicIconDiv = document.querySelector(".profile-picture-icon-div");
profilePicIconDiv.appendChild(profilePicIcon);

const searchBtnIcon = document.createElement("img");
searchBtnIcon.className = "search-btn-icon";
searchBtnIcon.src = "assets/images/search.png";

const searchBtnDiv = document.querySelector(".search-btn");
searchBtnDiv.appendChild(searchBtnIcon);

const cardContainer = document.querySelector(".card-container");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // card creation
    data.forEach((video) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

      cardContainer.appendChild(card);
    });
    // Listening changes on input and executing on search btn

    let inputText = "";
    const searchBar = document.querySelector(".search-input");
    searchBar.addEventListener("change", (event) => {
      inputText = event.target.value;
    });

    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const formatedSearch = inputText.toUpperCase().trim();
      const filterVideoList = data.filter((video) => {
        return video.name.toUpperCase().includes(formatedSearch);
      });

      filterVideoList.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    // Filter buttons

    const noFilterActive = document.querySelector(".all");
    const filterButtonCute = document.querySelector(".cute");
    const filterButtonGoofy = document.querySelector(".goofy");
    const filterButtonLove = document.querySelector(".love");
    const filterButtonGang = document.querySelector(".gang");
    const filterPerView = document.querySelector(".view");
    const filterPerAutor = document.querySelector(".autor");

    noFilterActive.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const shuffledData = shuffle(data);

      shuffledData.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    filterButtonCute.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const filteredVideos = data.filter((video) => {
        return video.filter.includes("cute");
      });

      filteredVideos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    filterButtonGoofy.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const filteredVideos = data.filter((video) => {
        return video.filter.includes("goofy");
      });

      filteredVideos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    filterButtonLove.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const filteredVideos = data.filter((video) => {
        return video.filter.includes("love");
      });

      filteredVideos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    filterButtonGang.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const filteredVideos = data.filter((video) => {
        return video.filter.includes("gang");
      });

      filteredVideos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    filterPerAutor.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const filteredVideos = data.sort((a, b) =>
        a.autor.localeCompare(b.autor)
      );

      filteredVideos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    // Randomize videos (All filter button)

    filterPerView.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const filteredVideos = data.sort((a, b) => {
        const regex = /\d+/;
        const viewA = parseInt(a.view.match(regex)[0]);
        const viewB = parseInt(b.view.match(regex)[0]);
        return viewB - viewA;
      });

      filteredVideos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);
      });
    });

    // Shuffles an array (Fisher-Yates algorythm)
    function shuffle(data) {
      let currentIndex = data.length;

      // this while loop means if there is still elements in the array, it will iterate on it until there is no more
      while (currentIndex != 0) {
        // randomize the index of "currenIndex"
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [data[currentIndex], data[randomIndex]] = [
          data[randomIndex],
          data[currentIndex],
        ];
      }
      return data;
    }
  });

// Lateral menu

const selectLateralMenu = document.querySelector(".lateral-menu");
selectLateralMenu.innerHTML = `
 <div class="home-img-and-text">
 <svg class="home-svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 24px; height: 24px; stroke: white"><path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path></svg> <p class="lateral-menu-text">Home</p>
 </div>
 <div class="shorts-img-and-text">
 <svg class="shorts-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 24px; height: 24px; stroke: white"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg> <p class="lateral-menu-text">Shorts</p>
 </div>
 <div class="subscriptions-img-and-text">
 <svg class="subscribe-svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 24px; height: 24px; stroke: white;"><path d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z"></path></svg>
 <p class="lateral-menu-text">Subscriptions</p>
 </div>
 <div class="you-img-and-text">
 <svg class="you-svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 24px; height: 24px; stroke: white;"><path d="M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-4 7.5L11 7v7l6-3.5z"></path></svg>
 <p class="lateral-menu-text">You</p>
 </div>
 `;
