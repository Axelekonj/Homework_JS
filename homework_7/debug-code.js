function getPasswordFromUser(success, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") success();
  else fail();
}

let user = {
  name: 'Andrew',

  loginSuccess() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};


getPasswordFromUser.call(user, this.loginSuccess, this.loginFail);

// коллбек-функции в аргументе не имеют доступ к this. методов обьекта user
