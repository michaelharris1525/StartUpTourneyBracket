// const btnDescriptions = [
//     { file: 'sound1.mp3', hue: 120 },
//     { file: 'sound2.mp3', hue: 0 },
//     { file: 'sound3.mp3', hue: 60 },
//     { file: 'sound4.mp3', hue: 240 },
//   ];
  
//   class Button {
//     constructor(description, el) {
//       this.el = el;
//       this.hue = description.hue;
//       this.sound = loadSound(description.file);
//       this.paint(25);
//     }
  
//     paint(level) {
//       const background = `hsl(${this.hue}, 100%, ${level}%)`;
//       this.el.style.backgroundColor = background;
//     }
  
//     async press(volume = 1.0) {
//       return new Promise(async (pressResolve) => {
//         this.paint(50);
//         await this.playSound(volume);
//         this.paint(25);
//         pressResolve();
//       });
//     }
  
//     async playSound(volume) {
//       return new Promise((playResolve) => {
//         this.sound.volume = volume;
//         this.sound.onended = playResolve;
//         this.sound.play();
//       });
//     }
//   }
  
//   class Game {
//     buttons;
//     allowPlayer;
//     sequence;
//     playerPlaybackPos;
//     mistakeSound;
  
//     constructor() {
//       this.buttons = new Map();
//       this.allowPlayer = false;
//       this.sequence = [];
//       this.playerPlaybackPos = 0;
//       this.mistakeSound = loadSound('error.mp3');
  
//       document.querySelectorAll('.game-button').forEach((el, i) => {
//         if (i < btnDescriptions.length) {
//           this.buttons.set(el.id, new Button(btnDescriptions[i], el));
//         }
//       });
  
//       const playerNameEl = document.querySelector('.player-name');
//       playerNameEl.textContent = this.getPlayerName();
//     }
  
//     async pressButton(button) {
//       if (this.allowPlayer) {
//         this.allowPlayer = false;
//         await this.buttons.get(button.id).press(1.0);
  
//         if (this.sequence[this.playerPlaybackPos].el.id === button.id) {
//           this.playerPlaybackPos++;
//           if (this.playerPlaybackPos === this.sequence.length) {
//             this.playerPlaybackPos = 0;
//             this.addButton();
//             this.updateScore(this.sequence.length - 1);
//             await this.playSequence();
//           }
//           this.allowPlayer = true;
//         } else {
//           this.saveScore(this.sequence.length - 1);
//           this.mistakeSound.play();
//           await this.buttonDance(2);
//         }
//       }
//     }
  
//     async reset() {
//       this.allowPlayer = false;
//       this.playerPlaybackPos = 0;
//       this.sequence = [];
//       this.updateScore('--');
//       await this.buttonDance(1);
//       this.addButton();
//       await this.playSequence();
//       this.allowPlayer = true;
//     }
  
//     getPlayerName() {
//       return localStorage.getItem('userName') ?? 'Mystery player';
//     }
  
//     async playSequence() {
//       await delay(500);
//       for (const btn of this.sequence) {
//         await btn.press(1.0);
//         await delay(100);
//       }
//     }
  
//     addButton() {
//       const btn = this.getRandomButton();
//       this.sequence.push(btn);
//     }
  
//     updateScore(score) {
//       const scoreEl = document.querySelector('#score');
//       scoreEl.textContent = score;
//     }
  
//     async buttonDance(laps = 1) {
//       for (let step = 0; step < laps; step++) {
//         for (const btn of this.buttons.values()) {
//           await btn.press(0.0);
//         }
//       }
//     }
  
//     getRandomButton() {
//       let buttons = Array.from(this.buttons.values());
//       return buttons[Math.floor(Math.random() * this.buttons.size)];
//     }
  
//     saveScore(score) {
//       const userName = this.getPlayerName();
//       let scores = [];
//       const scoresText = localStorage.getItem('scores');
//       if (scoresText) {
//         scores = JSON.parse(scoresText);
//       }
//       scores = this.updateScores(userName, score, scores);
  
//       localStorage.setItem('scores', JSON.stringify(scores));
//     }
  
//     updateScores(userName, score, scores) {
//       const date = new Date().toLocaleDateString();
//       const newScore = { name: userName, score: score, date: date };
  
//       let found = false;
//       for (const [i, prevScore] of scores.entries()) {
//         if (score > prevScore.score) {
//           scores.splice(i, 0, newScore);
//           found = true;
//           break;
//         }
//       }
  
//       if (!found) {
//         scores.push(newScore);
//       }
  
//       if (scores.length > 10) {
//         scores.length = 10;
//       }
  
//       return scores;
//     }
//   }
  
//   const game = new Game();
  
//   function delay(milliseconds) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(true);
//       }, milliseconds);
//     });
//   }
  
//   function loadSound(filename) {
//     return new Audio('assets/' + filename);
//   }
  
//   setInterval(() => {
//     const score = Math.floor(Math.random() * 3000);
//     const chatText = document.querySelector('#player-messages');
//     chatText.innerHTML =
//       `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` + chatText.innerHTML;
//   }, 5000);
let url = 'https://docs.google.com/spreadsheets/d/1ng4yec1mVko9zBp7ko-t1w9SjSmmPsSU9N_rNzenN3g/gviz/tq?';
const query = encodeURIComponent('Select A');
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep =>{

const data = JSON.parse(rep.substr(47).slice(0,-2));

const row01 = document.createElement('tr');
Player1.append(row01);
const row02 = document.createElement('tr');
Player2.append(row02);
const row03 = document.createElement('tr');
Player3.append(row03);
const row04 = document.createElement('tr');
Player4.append(row04);
const row05 = document.createElement('tr');
Player5.append(row05);
const row06 = document.createElement('tr');
Player6.append(row06);
const row07 = document.createElement('tr');
Player7.append(row07);
const row08 = document.createElement('tr');
Player8.append(row08);

data.table.cols.forEach((heading)=>{
const cell = document.createElement('option');
cell.textContent = heading.label;

row01.append(cell);
row02.append(cell);
row03.append(cell);
row04.append(cell);
row05.append(cell);
row06.append(cell);
row07.append(cell);
row08.append(cell);
})

data.table.rows.forEach((main)=>{
const container1 = document.createElement('option');
Player1.append(container1);

const container2 = document.createElement('option');
Player2.append(container2);

const container3 = document.createElement('option');
Player3.append(container3);

const container4 = document.createElement('option');
Player4.append(container4);

const container5 = document.createElement('option');
Player5.append(container5);

const container6 = document.createElement('option');
Player6.append(container6);

const container7 = document.createElement('option');
Player7.append(container7);

const container8 = document.createElement('option');
Player8.append(container8);


main.c.forEach((element)=> {

    const cell1 =  document.createElement('option');
    cell1.textContent = element.v;

    const cell2 =  document.createElement('option');
    cell2.textContent = element.v;

    const cell3 =  document.createElement('option');
    cell3.textContent = element.v;

    const cell4 =  document.createElement('option');
    cell4.textContent = element.v;

    const cell5 =  document.createElement('option');
    cell5.textContent = element.v;

    const cell6 =  document.createElement('option');
    cell6.textContent = element.v;

    const cell7 =  document.createElement('option');
    cell7.textContent = element.v;

    const cell8 =  document.createElement('option');
    cell8.textContent = element.v;


    container1.append(cell1);
    container2.append(cell2);
    container3.append(cell3);
    container4.append(cell4);
    container5.append(cell5);
    container6.append(cell6);
    container7.append(cell7);
    container8.append(cell8);

})
})
})

const Result00 = document.getElementById("Result0");
//------------------------Box 1-------------------------------
{
    const Res01 = document.getElementById("Result1");
    const Res02 = document.getElementById("Result2");

    const Name01 = document.getElementById("Player1");
    const Name02 = document.getElementById("Player2");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = "";            
        }
    })

}
//------------------------Box 2-------------------------------
{
    const Res01 = document.getElementById("Result3");
    const Res02 = document.getElementById("Result4");

    const Name01 = document.getElementById("Player3");
    const Name02 = document.getElementById("Player4");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = "";            
        }
    })

}
//------------------------Box 3-------------------------------
{
    const Res01 = document.getElementById("Result5");
    const Res02 = document.getElementById("Result6");

    const Name01 = document.getElementById("Player5");
    const Name02 = document.getElementById("Player6");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = "";            
        }
    })

}
//------------------------Box 4-------------------------------
{
    const Res01 = document.getElementById("Result7");
    const Res02 = document.getElementById("Result8");

    const Name01 = document.getElementById("Player7");
    const Name02 = document.getElementById("Player8");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = "";            
        }
    })

}

//------------------------Semi Finals Box 1-------------------------------

{
    const Res01 = document.getElementById("Result9");
    const Res02 = document.getElementById("Result10");

    const Name01 = document.getElementById("Player9");
    const Name02 = document.getElementById("Player10");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = Name01.innerHTML;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = Name02.innerHTML;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = "";            
        }
    })

}
//------------------------Semi Finals Box 2-------------------------------
{
    const Res01 = document.getElementById("Result11");
    const Res02 = document.getElementById("Result12");

    const Name01 = document.getElementById("Player11");
    const Name02 = document.getElementById("Player12");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = Name01.innerHTML;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = Name02.innerHTML;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = "";            
        }
    })
}


//chat box ----------------------------------------------------------------------

// function openChat() {
//   document.getElementById('chatbox').style.display='block';
//   $('.btn-chat').hide();
// }
// function closeChat() {
//   document.getElementById('chatbox').style.display='none';
//   $('.btn-chat').show();
// }
// $('form').submit(function () {
//   var text=$(this).find("textarea[name='msg']").val();

//   alert(text);
// });

