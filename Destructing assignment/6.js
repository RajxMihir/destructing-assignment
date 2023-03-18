function nameAndStreet(person) {
    const {name, address:{street}} = person;

    return {name, street};
}

const person = {
    name : "Mithun",
    address: {
      street: "B8, Block B, Industrial Area.",
    }
};

const result = nameAndStreet(person);
console.log(result);