class Patient {
	#name;
	#age;
	#phoneNumberPat;
	#address;
	constructor(name, age, phoneNumberPat, address) {
		this.#name = name;
		this.#age = age;
		this.#phoneNumberPat = phoneNumberPat;
		this.#address = address;
	};
};

export {Patient}