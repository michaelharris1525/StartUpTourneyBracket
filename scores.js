const leaderboard = {};

// Inside the event listeners for match results
if (Result01 === parseInt(Result00.value)) {
    leaderboard[Name01.value] = leaderboard[Name01.value] || { wins: 0, losses: 0 };
    leaderboard[Name01.value].wins++;
  
    leaderboard[Name02.value] = leaderboard[Name02.value] || { wins: 0, losses: 0 };
    leaderboard[Name02.value].losses++;
  } else {
    // Handle the case when Player 2 wins
    leaderboard[Name02.value] = leaderboard[Name02.value] || { wins: 0, losses: 0 };
    leaderboard[Name02.value].wins++;
  
    leaderboard[Name01.value] = leaderboard[Name01.value] || { wins: 0, losses: 0 };
    leaderboard[Name01.value].losses++;
  }

  function displayLeaderboard() {
    const leaderboardTable = document.getElementById("leaderboardTable");
    leaderboardTable.innerHTML = ""; // Clear previous leaderboard
  
    for (const playerName in leaderboard) {
      const playerData = leaderboard[playerName];
      const row = leaderboardTable.insertRow();
      const nameCell = row.insertCell(0);
      const winsCell = row.insertCell(1);
      const lossesCell = row.insertCell(2);
  
      nameCell.textContent = playerName;
      winsCell.textContent = playerData.wins;
      lossesCell.textContent = playerData.losses;
    }
  }

  // Inside the event listeners for match results
if (Result01 === parseInt(Result00.value)) {
    // Update the leaderboard
    leaderboard[Name01.value] = leaderboard[Name01.value] || { wins: 0, losses: 0 };
    leaderboard[Name01.value].wins++;
    leaderboard[Name02.value] = leaderboard[Name02.value] || { wins: 0, losses: 0 };
    leaderboard[Name02.value].losses++;
  
    // Update the leaderboard display
    displayLeaderboard();
  } else {
    // Handle the case when Player 2 wins
  
    // Update the leaderboard
    leaderboard[Name02.value] = leaderboard[Name02.value] || { wins: 0, losses: 0 };
    leaderboard[Name02.value].wins++;
    leaderboard[Name01.value] = leaderboard[Name01.value] || { wins: 0, losses: 0 };
    leaderboard[Name01.value].losses++;
  
    // Update the leaderboard display
    displayLeaderboard();
  }



// function loadScores() {
//     let scores = [];
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//       scores = JSON.parse(scoresText);
//     }
  
//     const tableBodyEl = document.querySelector('#scores');
  
//     if (scores.length) {
//       for (const [i, score] of scores.entries()) {
//         const positionTdEl = document.createElement('td');
//         const nameTdEl = document.createElement('td');
//         const scoreTdEl = document.createElement('td');
//         const dateTdEl = document.createElement('td');
  
//         positionTdEl.textContent = i + 1;
//         nameTdEl.textContent = score.name;
//         scoreTdEl.textContent = score.score;
//         dateTdEl.textContent = score.date;
  
//         const rowEl = document.createElement('tr');
//         rowEl.appendChild(positionTdEl);
//         rowEl.appendChild(nameTdEl);
//         rowEl.appendChild(scoreTdEl);
//         rowEl.appendChild(dateTdEl);
  
//         tableBodyEl.appendChild(rowEl);
//       }
//     } else {
//       tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
//     }
//   }
  
//   loadScores();
  