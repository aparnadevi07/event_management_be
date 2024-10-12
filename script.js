document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const eventName = document.getElementById('event-name').value;
    const venue = document.getElementById('venue').value;
    const decor = document.getElementById('decor').value;
  
    if (eventName && venue && decor) {
      alert(`Event "${eventName}" at "${venue}" will have the "${decor}" decor.`);
    } else {
      alert("Please fill in all the fields.");
    }
  });
  // Login form functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Welcome, ${name}! You've successfully signed in.`);
  } else {
    alert("Please fill in all the required fields.");
  }
});

  