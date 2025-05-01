document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const messageEl = document.getElementById("message");
  
    // Validate inputs
    if (!isValidUsername(username)) {
      messageEl.style.color = "red";
      messageEl.textContent = "Invalid username! It must start with a letter, be at least 5 characters, and contain only letters, numbers, or underscores.";
      return;
    }
  
    if (!isValidPassword(password)) {
      messageEl.style.color = "red";
      messageEl.textContent = "Invalid password! It must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
      return;
    }
  
    messageEl.style.color = "green";
    messageEl.textContent = `Welcome, ${username}! Your input is valid.`;
  });
  
  // Username must start with a letter, have at least 5 characters, only alphanumeric or _
  function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,}$/;
    return usernameRegex.test(username);
  }
  
  // Password must be 8+ chars, include lowercase, uppercase, number, and special char
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  }
  
  // 🔧 Optional: Run test cases in console
  const testCases = [
    { username: "user123", password: "Password1!", expected: true },
    { username: "u1", password: "Password1!", expected: false },
    { username: "123user", password: "Password1!", expected: false },
    { username: "user name", password: "Password1!", expected: false },
    { username: "user123", password: "pass", expected: false },
    { username: "user123", password: "password123", expected: false },
    { username: "user123", password: "PASSWORD123!", expected: false },
    { username: "user123", password: "Password", expected: false },
    { username: "user123", password: "Password1", expected: false },
    { username: "user123", password: "Pass@123", expected: true },
    { username: "user_name", password: "P@ssw0rd", expected: true }
  ];
  
  console.log("Running test cases...");
  testCases.forEach((tc, i) => {
    const valid = isValidUsername(tc.username) && isValidPassword(tc.password);
    const result = valid === tc.expected ? "✅ Passed" : "❌ Failed";
    console.log(`Test ${i + 1}: ${tc.username} / ${tc.password} → ${result}`);
  });
  