export const findGitHubUser = (user) => {
  return fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then(({ users }) =>
      users.map((user) => ({
        username: user.login,
        followers: user.followers,
        following: user.following,
        url: user.html_url,
      }))
    );
};

export const findUserRepos = (user) => {
  return fetch(`http://api.github.com/users/${user}/repos`)
    .then((res) => res.json())
    .then(({ repos }) =>
      repos.map((repo) => ({
        repoName: repo.name,
      }))
    );
};
