document.addEventListener("DOMContentLoaded", () => {
    const artistadata = [
        { name: "Charlie Brown Jr", image: "./img/charlie.png", link: "https://open.spotify.com/intl-pt/artist/1on7ZQ2pvgeQF4vmIA09x5" },
        { name: "Oficina G3", image: "./img/oficina.png", link: "https://open.spotify.com/intl-pt/artist/0gO5Vbklho8yrBrUdHhuLH"},
        { name: "The Weeknd", image: "./img/weekend.png", link:"https://open.spotify.com/intl-pt/artist/1Xyo4u8uXC1ZmMpatF05PJ"},
        { name: "Queen", image: "./img/queen.png", link: "https://open.spotify.com/intl-pt/artist/1dfeR4HaWDbWqFHLkxsg1d" },
        { name: "Gustavo Lima", image: "./img/gustavo.png", link: "https://open.spotify.com/intl-pt/artist/7MiDcPa6UiV3In7lIM71IN" },
    ];

    const recentesadata = [
        { name: "Pink", image: "./img/pink.png", link: "https://open.spotify.com/intl-pt/artist/1KCSPY1glIKqW2TotWuXOR"},
        { name: "30s to Mars", image: "./img/30s.png", link: "https://open.spotify.com/intl-pt/artist/0RqtSIYZmd4fiBKVFqyIqD"},
        { name: "Dua Lipa", image: "./img/dua.png", link:"https://open.spotify.com/intl-pt/artist/6M2wZ9GZgrQXHCFfjv46we"},
        { name: "Sistem of Sown", image: "./img/sistem.png", link: "https://open.spotify.com/intl-pt/artist/5eAWCfyUhZtHHtBdNk56l1"},
        { name: "Zé Ramalho", image: "./img/ze.png", link: "https://open.spotify.com/intl-pt/artist/7JoWcJHDOG58JYTe6d400S"},
    ];

    const bibliotecadata = [
        { name: "Slipknot", image: "./img/slipknot.png", link: "https://open.spotify.com/intl-pt/artist/05fG473iIaoy82BF1aGhL8"},
        { name: "Lady Gaga", image: "./img/lady.png", link: "https://open.spotify.com/intl-pt/artist/1HY2Jd0NmPuamShAr6KMms"},
        { name: "Gorillaz", image: "./img/gorilaz.png", link: "https://open.spotify.com/intl-pt/artist/3AA28KZvwAUcZuOKwyblJQ"},
        { name: "Eminem", image: "./img/eminem.png", link: "https://open.spotify.com/intl-pt/artist/7dGJo4pcD2V6oG8kP0tJRR"},
        { name: "Amy Winehouse", image: "./img/amy.png", link:"https://open.spotify.com/intl-pt/artist/6Q192DXotxtaysaqNPy5yR"},
    ];

    // CORRIGIDO: Selecionar containers corretos separadamente
    const artistasContainer = document.querySelector(".artistas");
    const recentesContainer = document.querySelector(".recentes");
    const bibliotecaContainer = document.querySelector(".biblioteca");

    // Artistas
    artistadata.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem do ${artist.name}" width="100">
            <h3>${artist.name}</h3>
            <a href="${artist.link}" target="_blank" class="ouvir-btn">Ouvir Álbum</a>
        `;
        artistasContainer.appendChild(artistCard);
    });

    // Recentes
    recentesadata.forEach(recent => {
        const recentCard = document.createElement('div');
        recentCard.classList.add('recent-card');

        recentCard.innerHTML = `
            <img src="${recent.image}" alt="Imagem do ${recent.name}" width="100">
            <h3>${recent.name}</h3>
            <a href="${recent.link}" target="_blank" class="ouvir-btn">Ouvir Álbum</a>
        `;
        recentesContainer.appendChild(recentCard);
    });

    // Biblioteca
    bibliotecadata.forEach(biblioteca => {
        const bibliotecaCard = document.createElement('div');
        bibliotecaCard.classList.add('biblioteca-card'); // CORRIGIDO nome da variável

        bibliotecaCard.innerHTML = `
            <img src="${biblioteca.image}" alt="Imagem do ${biblioteca.name}" width="100">
            <h3>${biblioteca.name}</h3>
            <a href="${biblioteca.link}" target="_blank" class="ouvir-btn">Ouvir Álbum</a>
        `;

        bibliotecaContainer.appendChild(bibliotecaCard);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("play-btn");

  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? "⏸" : "▶";
  });
});

