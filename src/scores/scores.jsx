import React from 'react';
import './scores.css';
// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Scores() {
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

    <main>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Losers</th>
            <th>Wins</th>
            <th>Placing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <div><td>John Arbuckel</td></div>
            <td>0</td>
            <td>8th place</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Odie ferous</td>
            <td>1</td>
            <td>7th place</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gunter Spears</td>
            <td>3</td>
            <td>6th place</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ligma ballson</td>
            <td>3</td>
            <td>5th place</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shaq Fu</td>
            <td>3</td>
            <td>4th place</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tim Allen</td>
            <td>3</td>
            <td>3rd place</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Johnny Bravo</td>
            <td>3</td>
            <td>2nd place</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tim Erkel</td>
            <td>3</td>
            <td>1st place</td>
          </tr>
        </tbody>
      </table>
    </main>

    <footer>
      <hr />
      <span class="text-reset">Author Name(s)</span>
      <br />
      <a href="https://github.com/webprogramming260/simon-html">GitHub</a>
    </footer>
    <script src="scores.js"></script>
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