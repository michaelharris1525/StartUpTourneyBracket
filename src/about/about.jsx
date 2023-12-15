import React from 'react';
import './about.css';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function About() {
    return (
        <div>
    <header>
      <h1>TOURNEY BRACKET<sup>&reg;</sup></h1>

      <nav>
        <menu>
          <li><a href="index.html">Home</a></li>
          <li><a href="play.html">Play</a></li>
          <li><a href="scores.html">Scores</a></li>
          <li><a href="about.html">About</a></li>
        </menu>
      </nav>

      <hr />
    </header>

    <div>
      {/* <img class="aboutimage" src="kedyfsjq.png" alt="aboutimage"> */}
      {/* <!-- <div id="picture" class="picture-box"><img width="400px" src="https://tse4.mm.bing.net/th?id=OIP.-BX1eQUVLb9DtC5ktPCFlAHaFG&pid=Api&P=0&h=220" alt="random" /></div> --> */}
      <p>
        IT'S TIME TO SEE WHO IS THE VERY BEST, LIKE NO ONE EVER WAS
      </p>

      <p>
        SIGN UP TO SEE IF YOU'RE WORTHY TO BE CROWNED CHAMPION
      </p>
    </div>

    <footer>
      <hr />
      <span class="text-reset">Author Name(s)</span>
      <br />
      <a href="https://github.com/michaelharris1525/StartUpTourneyBracket.git">GitHub</a>
    </footer>
  </div>
    );
}


// export function Login({ userName, authState, onAuthChange }) {
//   return (
//     <main className='container-fluid bg-secondary text-center'>
//       <div>
//         {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
//         {authState === AuthState.Authenticated && (
//           <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
//         )}
//         {authState === AuthState.Unauthenticated && (
//           <Unauthenticated
//             userName={userName}
//             onLogin={(loginUserName) => {
//               onAuthChange(loginUserName, AuthState.Authenticated);
//             }}
//           />
//         )}
//       </div>
//     </main>
//   );
// }