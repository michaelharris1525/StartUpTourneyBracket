import React from 'react';
import './play_style.css';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Play() {
    const sendMessage = () => {
        if (inputText.trim() === '') {
          return; // Don't send empty messages
        }
    
        const newMessage = {
          id: messages.length + 1, // You might want to use a more robust method for generating unique IDs
          text: inputText,
        };
    
        sendMessages([...messages, newMessage]);
        setInputText('');
      };
    return (
        <div>
        <form name = "formId0" className="formId0"> 
            <label className="number">Current Battle Mode First To</label>
            <select name="Result0" id="Result0" className="ResulT00 ResulT0">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> <label className="number"> Wins</label>
        </form>

    {/* <!-- bootstrap: Chat Box --> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    {/* <!-- websocket chat improved --> */}
    <div className="name">
        <fieldset id="name-controls">
          <legend>Username</legend>
          <input id="my-name" type="text" />
        </fieldset>
      </div>
     <div className="chat">
      <fieldset id="chat-controls" disabled>
        <legend>Chat</legend>
        <input id="new-msg" type="text" />
        <button onClick={sendMessage}>Send</button>
      </fieldset>
      <div id="chat-text"></div>
      </div>

        
    {/* <!-- Chat box -----------------------------------------------------------------------------------------------------> */}
     {/* <div className="container">
        <button className="btn btn-info btn-chat" type="button" onclick="openChat()">Chat</button>
    
        <div className="chatbox" id="chatbox">
            <h2>Message</h2>
            <form className="form-container">
              <textarea type="text" placeholder="Type Text.." name="msg" required=""></textarea>
              <button type="submit" className="btn btn-info btn-lg btn-send">Send</button>
              <button type="button" className="btn btn-danger btn-lg btn-close" onclick="closeChat()">Close</button>
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
        <div className="lsOutput"></div>
        "
    </fieldset> */}

   
{/* <!--part 1: Branch 1 going to contain everything 1x of this-----------------------------------------------------------------> */}
      <div>
      <div className="Container"> 
        {/* <!-------------------------1--------------------------------------------> */}
            <div className="Branch_1">
                {/* <!--Part 2: The part which contain each 4 of the matches in this branch.--> */}
                
                <div className="Match"> 
                <div className="Object_1"> 
                {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
                    <div><select className="Name" type="text" id="Player1">
                        <option value="0">player1name</option>
                        <option value="1">player2name</option>
                    </select></div>
                    {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId1" className="Result">
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
            
                    
                    <div><select className="Name" type="text" id="Player2">
                        {/* <!-- <option value="0">player2name</option>
                        <option value="1">player1name</option> --> */}
                    </select>
                    </div>
                    {/* <!--Part 4: Name of player 8x of this--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId2" className="Result">
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
                <div className="Match">
                <div className="Object_1"> 
                {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
                    <div>
                        <select className="Name" type="text" id="Player3">
                        
                        </select>
                    </div>
                    {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId3" className="Result">
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
    
                    <div><select className="Name" type="text" id="Player4">
                        {/* <!-- <option value="0">player4name</option>
                        <option value="1">player3name</option> --> */}
                    </select></div>
                    {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
                    <div> 
                        {/* <!--Part 4: Results 8x of this--> */}
                    <form name="FormId4" className="Result">
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
    <div className="Match">
    <div className="Object_1"> 
    {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
        <div><select className="Name" type="text" id="Player5">
            {/* <!-- <option value="0">player5name</option>
            <option value="1">player6name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId5" className="Result">
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
    
        <div><select className="Name" type="text" id="Player6">
            {/* <!-- <option value="0">player6name</option>
            <option value="1">player5name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId6" className="Result">
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
    <div className="Match">
    <div className="Object_1"> 
    {/* <!--Part 3: Name of player & Result 4x of this in this branch--> */}
    
        <div><select className="Name" type="text" id="Player7">
            {/* <!-- <option value="0">player7name</option>
            <option value="1">player8name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId7" className="Result">
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
    
        <div><select className="Name" type="text" id="Player8">
            {/* <!-- <option value="0">player8name</option>
            <option value="1">player7name</option> --> */}
        </select></div>
        {/* <!--Part 4: Name of player 8x of this in this branch--> */}
    
        <div> 
            {/* <!--Part 4: Results 8x of this--> */}
        <form name="FormId8" className="Result">
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
    
    <div className="Branch_2">
        {/* <!--Part 2: The part which contain each 2 of the matches. In this branch--> */}
        <div className="Match_02">        
        <div className="Object_2">
             {/* <!--Part 3: Name of player & Result 2x of this in this branch--> */}
    
            <div className="Name_Forward" type="text" id="Player9">Player</div>
            {/* <!--Part 4: Name of player 4x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 8x of this--> */}
            <form name="FormId9" className="Result">
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
    
            <div className="Name_Forward" type="text" id="Player10">Player</div>
            {/* <!--Part 4: Name of player 4x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 4x of this in this branch--> */}
            <form name="FormId10" className="Result">
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
    <div className="Match_02">
    <div className="Object_2"> 
    {/* <!--Part 3: Name of player & Result 2x of this in this branch--> */}
    
            <div className="Name_Forward" type="text" id="Player11">Player</div>
            {/* <!--Part 4: Name of player 4x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 4x of this in this branch--> */}
            <form name="FormId11" className="Result">
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
    
            <div className="Name_Forward" type="text" id="Player12">Player</div>
            {/* <!--Part 4: Name of player 8x of this--> */}
    
            <div> 
                {/* <!--Part 4: Results 4x of this in this branch--> */}
            <form name="FormId12" className="Result">
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
 
    
    
    <div className="Branch_3">
        {/* <!--Part 2: The part which contain 1 of the matches.--> */}
        <div className="Match_03">         
        <div className="Object_3"> 
        {/* <!--Part 3: Name of player & Result 1x of this in this branch--> */}
    
            <div className="Name_Forward" type="text" id="Player13">Player</div>
            {/* <!--Part 2: Name of player 2x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 2x of this in this branch--> */}
            <form name="FormId13" className="Result">
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
    
            <div className="Name_Forward" type="text" id="Player14">Player</div>
            {/* <!--Part 2: Name of player 2x of this in this branch--> */}
    
            <div> 
                {/* <!--Part 4: Results 2x of this in this branch--> */}
            <form name="FormId14" className="Result">
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
//     <main classNameName='container-fluid bg-secondary text-center'>
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