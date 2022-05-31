class Validation {
  constructor(name, value, fn) {
    this.object = value;
    this.name = name;
    this.function = fn;
  }

  max(value) {
    if (this.object > value) {
      return this.function(`${this.name} is not equal to ${value}`);
    } else {
      this.function(``);
    }
  }

  maxLength(value) {
    if (this.object.length > value) {
      return { success: false, msg: `${this.name} is is greater than ${value}` };
    } else {
      this.function(``);
    }
  }

  min(value) {
    if (this.object < value) {
      return this.function(`${this.name} length is greater than ${value}`);
    } else {
      this.function(``);
    }
  }

  minLength(value) {
    if (this.object.length < value) {
      return this.function(`${this.name} length is less than ${value}`);
    } else {
      this.function(``);
    }
  }
  number() {
    if (typeof this.object !== 'number') {
      return this.function(`${this.name} is not a number`);
    } else {
      this.function(``);
    }
  }

  string() {
    if (typeof this.object !== 'string') {
      return this.function(`${this.name} is not a string`);
    } else {
      this.function(``);
    }
  }
  passed() {
    return true;
  }
}
export default Validation;
