


let playerBalance;
let playerDues;
let playerPaid;

let numPlayers = 11;

let teamFee = 800;
let refFees = 80;
let totalDue = teamFee + refFees;
let playerCost = totalDue / numPlayers;


function grab(id) {
  const elem = document.querySelector(id);
  return elem;
}


// Display Team Balance
  const teamAccount = {
    billed: true,
    bills: 700,
    payments: 0,
    get balance(){
      return this.bills - this.payments;
    }
  }

  const teamBalanceDisplay = document.createElement('p');
    teamBalanceDisplay.innerHTML = `\$ ${teamAccount.balance}`;
  const teamBalanceDiv = grab(`#team-balance-div`);
    teamBalanceDiv.append(teamBalanceDisplay);

// Bill Team
  const teamBillForm = grab(`#team-bill-form`);
  teamBillForm.addEventListener(`submit`, e => {
    teamAccount.bills += Number(e.target.elements.amount.value);
    teamBalanceDisplay.innerHTML = `\$ ${teamAccount.balance}`;
    e.preventDefault();
    e.target.reset();
  })

// Submit Team Payment
  const teamPayForm = grab(`#team-pay-form`);
  teamPayForm.addEventListener('submit', e => {
    teamAccount.payments += Number(e.target.elements.amount.value);
    teamBalanceDisplay.innerHTML = `\$ ${teamAccount.balance}`;
    e.preventDefault();
    e.target.reset();
  })
  


// Add Players to Team and display
  let teamMembers = [];

  function createPlayer(name, email, amountDue) {
      return {
          name,
          email,
          amountDue
      }
  };

  function addPlayer(name, email) {
    const player = createPlayer(name, email);
    teamMembers.push(player);
    return player;
  }

  // input player object,target elem, and new elem type
  function appendPlayer(obj, target, elem) {
    const html = document.createElement(elem);
    const text = `${obj.name}, ${obj.email}, Owes: ${obj.amountDue}`;
    html.textContent = text;
    target.append(html);
  }

  // Submit Button Event, Add & Display Player
  const teamListDiv = grab('#team-list-div');
  const addPlayerForm = grab('#add-player-form');
    addPlayerForm.addEventListener('submit', e => {
      e.preventDefault();
      const playerName = e.target.elements.name.value;
      const playerEmail = e.target.elements.mail.value;
      const player = addPlayer(playerName, playerEmail)
      appendPlayer(player, teamListDiv, `p`);
      console.log(teamMembers);
      e.target.reset();
    })

