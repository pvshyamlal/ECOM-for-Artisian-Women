document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.status !== 200) {
        errorElement.textContent = 'Wrong credentials entered, please try again';
    } else {
        errorElement.textContent = '';
        // Handle successful login (e.g., redirect to index.html or store token)
        window.location.href = 'index.html';
    }
});
