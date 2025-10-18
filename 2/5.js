// Колекції
"use strict";

const phonebook = [
	{ name: "Andrew", phone: "+380965122881" },
	{ name: "Oleg", phone: "+380668824606" },
	{ name: "Veronika", phone: "+380687254787" },
	{ name: "Katy", phone: "+380988003644" },
	{ name: "Roman", phone: "+380952343984" },
];

let findPhoneByName = (name) => {
	for (let person of phonebook) {
		if (person.name === name) return person.phone;
	}
};

console.log(findPhoneByName("Andrew"));

const createHash = (people) => {
	const hash = {};
	for (let person of people) {
		hash[person.name] = person.phone;
	}
	return hash;
};

phonebookHash = createHash(phonebook);

findPhoneByName = (name) => {
	return phonebookHash[name];
};

console.log(findPhoneByName("Roman"));