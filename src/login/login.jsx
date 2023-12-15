import React from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Login() {
    return (
        <main>
      <image> 
        
      </image>
      <div> 
      <h1>Welcome</h1>
      <p>Login to play</p>
      </div>
      <form method="get" action="play.html">
        <label for="name">Username</label>
        <input type="text" id="name" placeholder="Your name here" />
        <form method="get" action="play.html">
          <label for="name">Password</label>
          <input type="text" id="name" placeholder="Password" />
          {/* <!-- error right here --> */}
          <button type="submit" class="btn btn-primary" onclick="login()">Login</button>
        </form>
      </form>
    </main>
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