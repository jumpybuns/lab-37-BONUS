export const findGitHubUser = (user) => {
  return fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then(({ users }) =>
      users.map((user) => ({
        username: user.login,
        url: user.html_url,
        name: user.name,
        bio: user.bio,
      }))
    );
};
