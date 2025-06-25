fetch('/api/cards')
  .then(res => res.json())
  .then(cards => {
    const container = document.getElementById("cards");
    cards.forEach(card => {
      container.innerHTML += `
        <div class="card">
          <img src="${card.imagen}" alt="${card.nombre}" />
          <h3>${card.nombre}</h3>
          <p>${card.descripcion}</p>
        </div>
      `;
    });
  });
