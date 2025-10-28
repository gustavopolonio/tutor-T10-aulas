// PARADIGMA


// React - biblioteca para F.E. para JS
// 2018 -> POO
// Programaç funcional

// Angular - POO
// JAVA - POO


// Programaç. funcional
// POO - prog orientada a obj. - Classes

// function logIn() {
//   // this
//   console.log(this);

//   this.isLoggedIn = true
// }

// function createUser(name, email) {
//   const user = {
//     name,
//     email,
//     isLoggedIn: false,
//     logIn
//   }

//   return user
// }

// base - Popup
// PopupWithForm extends
// PopupImage extends


// for loop {
// ...
// }


// Encapsulamento
// Herança - base (super, pai)
// Polimorfismo


// role - admin | member
// permissoes - ["read", "write", "delete"]

// NODE.js

class User {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.isLoggedIn = false
    
    this._passwordHash = this._generateHash(password)
  }

  logIn() {
    this.isLoggedIn = true
  }

  getPermissions() {
    // dsadsadsa
    // ddsadsa
    return ["read", "write"]
  }

  _generateHash(string) {
    // 123 - 321
    return string.split("").reverse().join("")
  }
}

class Admin extends User {
  constructor(name, email, password) {
    super(name, email, password)
    this.role = 'admin'
  }

  getPermissions() {
    const permissions = super.getPermissions()
    permissions.push("delete")
    return permissions
  }

  deleteUser() {
    console.log('Deletou user');
  }
}

class Member extends User {
  constructor(name, email, password) {
    super(name, email, password)
    this.role = 'member'
  }
}

const user1 = new Member("USer 1", "user1@", "123")
const admin = new Admin("USer 2", "user2@", "456")
admin.getPermissions()
// console.log(user1.getPermissions());
// console.log(admin.getPermissions());
// admin.deleteUser()

// user1.deleteUser()
// console.log();


// console.log(user1.#passwordHash);
// console.log(user2);


// const user1 = createUser('user 1', 'user1@')
// const user2 = createUser('user 2', 'user2@')

// user1.logIn()
// console.log(user1);



// console.log(user1.logIn === user2.logIn);
// console.log(user2);

// console.log(this);  // Janela do nevagador, undefinend, {}
