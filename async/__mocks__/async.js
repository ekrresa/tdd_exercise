var fakeData = [
  {
    id: 1,
    name: "calculator",
    full_name: "ochuko56/calculator",
    private: false,
    owner: {
      login: "username",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/ochuko56/calculator",
    description: "Basic calculator",
    fork: false
  },
  {
    id: 2,
    name: "chaw",
    full_name: "ochuko56/chaw",
    private: false,
    owner: {
      login: "username",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/ochuko56/chaw",
    description: "Basic calculator",
    fork: false
  },
  {
    id: 3,
    name: "robofriends",
    full_name: "ochuko56/robofriends",
    private: false,
    owner: {
      login: "username",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/ochuko56/robofriends",
    description: "Basic calculator",
    fork: false
  }
];

var asyncGithub = function(username) {
  if (typeof username === "string") {
    return new Promise(function(resolve) {
      resolve(fakeData);
    });
  }

  throw "Needs a valid string argument";
};

module.exports = asyncGithub;
