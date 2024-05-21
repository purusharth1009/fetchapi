document.getElementById('fetch-users-btn').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            const users = data.data;
            const userList = document.getElementById('user-list');
            userList.innerHTML = ''; // Clear any existing content

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';

                const userImage = document.createElement('img');
                userImage.src = user.avatar;
                userImage.alt = `${user.first_name} ${user.last_name}`;

                const userInfo = document.createElement('div');
                userInfo.className = 'user-info';

                const userName = document.createElement('h3');
                userName.textContent = `${user.first_name} ${user.last_name}`;

                const userEmail = document.createElement('p');
                userEmail.textContent = user.email;

                userInfo.appendChild(userName);
                userInfo.appendChild(userEmail);
                userCard.appendChild(userImage);
                userCard.appendChild(userInfo);

                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}
