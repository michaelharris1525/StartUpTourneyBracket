function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }

  async function login_real() {
    let user_info = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/users');
      user_info = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('userinfo', JSON.stringify(user_info));
    } catch {
      // If there was an error then just use the last saved scores
      const usertext = localStorage.getItem('userinfo');
      if (usertext) {
        user_info = JSON.parse(usertext);
      }
    }
  
    displayScores(user_info);
  }