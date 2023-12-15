import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Play } from './play/play.jsx';
import { Scores } from './scores/scores.jsx';
import { About } from './about/about.jsx';
// import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login.jsx';

export default function App() {
    return (
        <BrowserRouter>
        <div className="app bg-dark text-light">
        <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
            <a className="navbar-brand" href="#">Startup Bracket<sup>&reg;</sup></a>
        
            {/* menu */}
            <menu className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="login">Login</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="play">Play</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="scores">Scores</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            </menu>
        </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/play' element={<Play />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>

        <footer className="bg-dark text-">
        <div className="container-fluid">
            <span className="text-reset">Michael Harris</span>
            <a className="text-reset" href="https://github.com/webprogramming260/simon-websocket">
                Source
            </a>
        </div>
        </footer>
    </div>
    </BrowserRouter>

    );
}


// export default function App() {
//     return (
//         <BrowserRouter>
//         <div class="app bg-dark text-light">
//         <header class="container-fluid">
//         <nav class="navbar fixed-top navbar-dark">
//             <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
//             <menu class="navbar-nav">
//             <li class="nav-item">
//                 <a class="nav-link active" href="index.html">Home</a>
//             </li>
//             </menu>
//         </nav>
//         </header>
//         <Login />
//         <Scores />
//         <About />
//         <Play />
        // {/* <main class="container-fluid bg-secondary text-center">
        //     components go here.
        // </main> */}

//         <footer class="bg-dark text-">
//         <div class="container-fluid">
//             <span class="text-reset">Author Name(s)</span>
//             <a class="text-reset" href="https://github.com/webprogramming260/simon-websocket">
//                 Source
//                 </a>
//         </div>
//         </footer>
//     </div>
//     </BrowserRouter>

//     );
// }

// function App() {
//   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
//   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
//   const [authState, setAuthState] = React.useState(currentAuthState);

//   return (
//     <BrowserRouter>
//       <div className='body bg-dark text-light'>
//         <header className='container-fluid'>
//           <nav className='navbar fixed-top navbar-dark'>
//             <div className='navbar-brand'>
//               Simon<sup>&reg;</sup>
//             </div>
//             <menu className='navbar-nav'>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to=''>
//                   Login
//                 </NavLink>
//               </li>
//               {authState === AuthState.Authenticated && (
//                 <li className='nav-item'>
//                   <NavLink className='nav-link' to='play'>
//                     Play
//                   </NavLink>
//                 </li>
//               )}
//               {authState === AuthState.Authenticated && (
//                 <li className='nav-item'>
//                   <NavLink className='nav-link' to='scores'>
//                     Scores
//                   </NavLink>
//                 </li>
//               )}
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='about'>
//                   About
//                 </NavLink>
//               </li>
//             </menu>
//           </nav>
//         </header>

//         <Routes>
//           <Route
//             path='/'
//             element={
//               <Login
//                 userName={userName}
//                 authState={authState}
//                 onAuthChange={(userName, authState) => {
//                   setAuthState(authState);
//                   setUserName(userName);
//                 }}
//               />
//             }
//             exact
//           />
//           <Route path='/play' element={<Play userName={userName} />} />
//           <Route path='/scores' element={<Scores />} />
//           <Route path='/about' element={<About />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>

//         <footer className='bg-dark text-dark text-muted'>
//           <div className='container-fluid'>
//             <span className='text-reset'>Author Name(s)</span>
//             <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
//               Source
//             </a>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// function NotFound() {
//   return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
// }

// export default App;
