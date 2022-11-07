function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon=${player2}.svg" alt="Bandeira do ${player2}" />
  </li>
  `
}

// Uma variável zerada. 
let delay = -0.3; 
function createCard(date, day, games) {
  // O valor de delay é acrescentado em 0.3 segundos a cada varíavel que é chamada, resultando em 0.9 segundos em 3 cartões. 
  delay = delay + 0.3; 
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))
  +
  createCard(
    "28/11",
    "segunda",
    createGame(
      "brazil",
      "13:00",
      "switzerland"
    ) /* + createGame('brazil', '13:00', 'switzerland') Deve-se concatenar o próximo creategame() para adicionar mais jogos a tabela.*/
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))

