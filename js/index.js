document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('github-form');
    const userList = document.getElementById('user-list');
    const repoList = document.getElementById('repos-list');
    const input = document.getElementById('search');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = input.value;
        fetch(`https://api.github.com/search/users?q=${username}`)
        .then(resp => resp.json())
        .then(json => {
            json.items.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${user.html_url}">${user.login}</a>`;
                userList.appendChild(li);
            })
        })

        fetch(`https://api.github.com/users/${username}/repos`)

        .then(resp => resp.json())
        .then(json => {
            json.forEach(repo => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
                repoList.appendChild(li);
            })
        })

    })
}
)

