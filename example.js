class dummyObject {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  [Symbol.iterator]() {
    let i = 0;
    const entries = Object.entries(this);
    return {
      next: () => {
        if (i < entries.length) {
          return {
            value: entries[i++],
            done: false,
          };
        } else done: true;
      },
    };
  }
}

const dummy = new dummyObject('John', 30, 'New York', 'USA');

console.log(Object.entries(dummy));

for (const [key, value] of dummy) {
  console.log(`${key}: ${value}`);
}
