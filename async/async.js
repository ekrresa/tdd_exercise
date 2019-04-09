const fetch = require("node-fetch");

var asyncGithub = function(username) {
  if (typeof username === "string") {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
      })
      .catch(function(err) {
        return err;
      });
  }
  throw "Needs a valid string argument";
};

module.exports = asyncGithub;
