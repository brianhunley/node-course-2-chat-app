/*
[{
  id: 'kjdfkdjf',
  name: 'Brian',
  room: 'The Walking Dead Fans'
}];
*/

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// example ES6 class
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Brian', 53);
const description = me.getUserDescription();
console.log(description);
*/

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    // return user that was removed
    // use the filter method
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user; 
  }

  getUser(id) {
    // use the filter method
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = { Users };
