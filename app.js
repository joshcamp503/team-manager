let numPlayers = 11;
let teamFee = 800;
let refFees = 80;
let totalDue = teamFee + refFees;
let playerCost = totalDue / numPlayers;


console.log(`Total due is \$${totalDue}\n`)
console.log(`The cost per player is \$${playerCost}`);