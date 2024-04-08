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
    // Listening changes on input

    let inputText = "";
    const searchBar = document.querySelector(".search-input");
    searchBar.addEventListener("change", (event) => {
      inputText = event.target.value;
    });

    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", () => {
      cardContainer.innerHTML = "";

      const formatedSearch = inputText.toUpperCase().trim();
      const compareSearchAndData = data.filter((video) => {
        return video.name.toUpperCase().includes(formatedSearch);
      });

      compareSearchAndData.forEach((video) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img class="card-img" src="${video.image}" alt="${video.name}">
       <h1>${video.name}</h1>
       <h2>${video.autor}</h2>
       <h3>${video.view}</h3>
       `;

        cardContainer.appendChild(card);

        // formatedSearch.forEach((video) => {
        //   const card = document.createElement("div");
        //   card.className = "card";

        //   card.innerHTML = `
        //   <img class="card-img" src="${video.image}" alt="${video.name}">
        //   <h1>${video.name}</h1>
        //   <h2>${video.autor}</h2>
        //   <h3>${video.view}</h3>
        //   `;

        //   cardContainer.appendChild(card);
      });
    });

    // const input = document.querySelector("input");
    // // research changes the text to upper case and skips useless spaces
    // input.addEventListener("input", (text) => {
    //   const research = text.target.value.toUpperCase().trim();
    //   // filteredVideos return the videos with filters applied
    //   const filteredVideos = data.filter((video) => {
    //     return video.name.toUpperCase().includes(research);
    //   });
    //   // Empties cardContainer so it can receive filtered data
    //   cardContainer.innerHTML = "";
    //   // Create card after being filtered
    //   filteredVideos.forEach((video) => {
    //     const card = document.createElement("div");
    //     card.className = "card";

    //     card.innerHTML = `
    //   <img class="card-img" src="${video.image}" alt="${video.name}">
    //    <h1>${video.name}</h1>
    //    <h2>${video.autor}</h2>
    //    <h3>${video.view}</h3>
    //    `;

    //     cardContainer.appendChild(card);
    //   });
    // });
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
