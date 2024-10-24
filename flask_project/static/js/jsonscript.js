// Handle form submissions for each form type for shelter

document.getElementById('login_user').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/userdata', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('users-list');
        const newUser = data.users[data.users.length - 1];
        const newUserItem = document.createElement('li');
        newUserItem.textContent = `${newUser.name} (${newUser.email}) (${newUser.mobile}) (${newUser.username})`;
        userList.appendChild(newUserItem);
        event.target.reset();
    });
});
