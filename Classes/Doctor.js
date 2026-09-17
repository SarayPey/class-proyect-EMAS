import { specialties } from './Specialty.js';

class Doctor {
	#nameDoc;
	#specialtyDoc;
	#phoneNumberDoc;
	constructor(nameDoc, specialtyDoc, phoneNumberDoc) {
		this.#nameDoc = nameDoc;
		this.#specialtyDoc = specialties[specialtyDoc];
		this.#phoneNumberDoc = phoneNumberDoc;
	};
	showDoctorInfo(){
		return `Name: ${this.#nameDoc}<br>Specialty: ${this.#specialtyDoc.name}<br>Phone number: ${this.#phoneNumberDoc}`;
	}
}
export {Doctor};