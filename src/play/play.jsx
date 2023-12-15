import React from 'react';
import './play_style.css';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Play() {
    return (
        <div>
        <form name = "formId0" class="formId0"> 
            <label class="number">Current Battle Mode First To</label>
            <select name="Result0" id="Result0" class="ResulT00 ResulT0">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> <label class="number"> Wins</label>
        </form>

    {/* <!-- bootstrap: Chat Box --> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    {/* <!-- websocket chat improved --> */}
    <div class="name">
        <fieldset id="name-controls">
          <legend>Username</legend>
          <input id="my-name" type="text" />
        </fieldset>
      </div>
  
      <fieldset id="chat-controls" disabled>
        <legend>Chat</legend>
        <input id="new-msg" type="text" />
        <button onclick="sendMessage()">Send</button>
      </fieldset>
      <div id="chat-text"></div>

        
    {/* <!-- Chat box -----------------------------------------------------------------------------------------------------> */}
     {/* <div class="container">
        <button class="btn btn-info btn-chat" type="button" onclick="openChat()">Chat</button>
    
        <div class="chatbox" id="chatbox">
            <h2>Message</h2>
            <form class="form-container">
              <textarea type="text" placeholder="Type Text.." name="msg" required=""></textarea>
              <button type="submit" class="btn btn-info btn-lg btn-send">Send</button>
              <button type="button" class="btn btn-danger btn-lg btn-close" onclick="closeChat()">Close</button>
            </form>
          </div>
          
      <br />
      <br />
      <br />
      <br />
    </div> */}
     <br />
      <br />
      <br />
      <br />
    {/* <fieldset>
        <legend>Local Storage</legend>
        <input id="inpkey" type="text" placeholder="real name:"/>
        <input id="inpvalue" type="text" placeholder="gamertag"/>
        <button type="button" id="btnInsert">Insert Data</button>
    </fieldset>
    <fieldset>
        <legend>Output</legend>
        <div class="lsOutput"></div>
        "
    </fieldset> */}

   
{/* <!--part 1: Branch 1 going to contain everything 1x of this-----------------------------------------------------------------> */}
      <div>
      <div class="Container"> 
        {/* <!-------------------------1--------------------------------------------> */}
            <div class="Branch_1">
                {/* <!--Part 2: The part which contain each 4 of the matches in this branch.--> */}
                
                <div class="Match"> 
                <div class="Object_1"> 
                {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
                    <div><select class="Name" type="text" id="Player1">
                        <option value="0">player1name</option>
                        <option value="1">player2name</option>
                    </select></div>
                    {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId1" class="Result">
                    <select id="Result1"> 
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
    
                    </select>
                    </form>
                    </div>
            
                    
                    <div><select class="Name" type="text" id="Player2">
                        {/* <!-- <option value="0">player2name</option>
                        <option value="1">player1name</option> --> */}
                    </select>
                    </div>
                    {/* <!--Part 4: Name of player 8x of this--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId2" class="Result">
                    <select id="Result2"> 
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </form>
                    </div>
    
                </div>
                </div>
    {/* <!----------------------------------2-----------------------------------> */}
                <div class="Match">
                <div class="Object_1"> 
                {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
                    <div>
                        <select class="Name" type="text" id="Player3">
                        
                        </select>
                    </div>
                    {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId3" class="Result">
                    <select id="Result3"> 
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
    
                    </select>
                    </form>
                    </div>
    
                    <div><select class="Name" type="text" id="Player4">
                        {/* <!-- <option value="0">player4name</option>
                        <option value="1">player3name</option> --> */}
                    </select></div>
                    {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId4" class="Result">
                    <select id="Result4"> 
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
    
                    </select>
                    </form>
                    </div>
                </div>
                </div>
    {/* <!---------------------------------3 (Half)------------------------------------> */}
    <div class="Match">
    <div class="Object_1"> 
    {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
        <div><select class="Name" type="text" id="Player5">
            {/* <!-- <option value="0">player5name</option>
            <option value="1">player6name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId5" class="Result">
        <select id="Result5"> 
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
    
        </select>
        </form>
        </div>
    
        <div><select class="Name" type="text" id="Player6">
            {/* <!-- <option value="0">player6name</option>
            <option value="1">player5name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId6" class="Result">
        <select id="Result6"> 
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
    
        </select>
        </form>
        </div>
    </div>
    </div>
    {/* <!------------------------------------4---------------------------------> */}
    <div class="Match">
    <div class="Object_1"> 
    {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
        <div><select class="Name" type="text" id="Player7">
            {/* <!-- <option value="0">player7name</option>
            <option value="1">player8name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId7" class="Result">
        <select id="Result7"> 
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
    
        </select>
        </form>
        </div>
    
        <div><select class="Name" type="text" id="Player8">
            {/* <!-- <option value="0">player8name</option>
            <option value="1">player7name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId8" class="Result">
        <select id="Result8"> 
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
    
        </select>
        </form>
        </div>
    </div>
    </div>
    
            </div>
    {/* <!------------------Quarter-Finals------------------------------------->
    <!-----------------------Branch 1 ends here---------------------------->
    <!---------------------------------------------------------------------> */}
    
    <div class="Branch_2">
        {/* <!--Part 2: The part which contain each 2 of the matches. In this branch--> */}
        <div class="Match_02">        
        <div class="Object_2">
             {/* <!--Part 3: Name of player & Result 2x of this in this branch--> */}
    
            <div class="Name_Forward" type="text" id="Player9">Player</div>
            {/* <!--Part 4: Name of player 4x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 8x of this--> */}
            <form name="FormId9" class="Result">
            <select id="Result9"> 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
    
            </select>
            </form>
            </div>
    
            <div class="Name_Forward" type="text" id="Player10">Player</div>
            {/* <!--Part 4: Name of player 4x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 4x of this in this branch--> */}
            <form name="FormId10" class="Result">
            <select id="Result10"> 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
    
            </select>
            </form>
            </div>
        </div>
        </div>
    {/* <!----------------------------------2 (half)-----------------------------------> */}
    <div class="Match_02">
    <div class="Object_2"> 
    {/* <!--Part 3: Name of player & Result 2x of this in this branch--> */}
    
            <div class="Name_Forward" type="text" id="Player11">Player</div>
            {/* <!--Part 4: Name of player 4x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 4x of this in this branch--> */}
            <form name="FormId11" class="Result">
            <select id="Result11"> 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
    
            </select>
            </form>
            </div>
    
            <div class="Name_Forward" type="text" id="Player12">Player</div>
            {/* <!--Part 4: Name of player 8x of this--> */}
    
            <div> 
                {/* <!--Part 4: Results 4x of this in this branch--> */}
            <form name="FormId12" class="Result">
            <select id="Result12"> 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
    
            </select>
            </form>
            </div>
    
        </div>
    </div>
    </div>
 
    
    
    <div class="Branch_3">
        {/* <!--Part 2: The part which contain 1 of the matches.--> */}
        <div class="Match_03">         
        <div class="Object_3"> 
        {/* <!--Part 3: Name of player & Result 1x of this in this branch--> */}
    
            <div class="Name_Forward" type="text" id="Player13">Player</div>
            {/* <!--Part 2: Name of player 2x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 2x of this in this branch--> */}
            <form name="FormId13" class="Result">
            <select id="Result13"> 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
    
            </select>
            </form>
            </div>
    
            <div class="Name_Forward" type="text" id="Player14">Player</div>
            {/* <!--Part 2: Name of player 2x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 2x of this in this branch--> */}
            <form name="FormId14" class="Result">
            <select id="Result14"> 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
    
            </select>
            </form>
            </div>
    
        </div>
    </div>
    </div>

        </div>
    </div>
    </div>
    );
}


{/* // export function Login({ userName, authState, onAuthChange }) {
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
// } */}