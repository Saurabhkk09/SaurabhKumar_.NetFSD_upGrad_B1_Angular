class User {
  constructor(password) {
    this.password = password;
  }

  set password(value) {
    if (value.length >= 6) {
      this._password = value;
    } else {
      console.error("Error: Password must be at least 6 characters long.");
    }
  }

  get password() {
    return this._password;
  }
}