class Specialty {
	constructor(name) {
		this.name = name;
	}
	getSpec(){
		return `${this.name}`;
	}
}

let psychologist = new Specialty('Psycologist');
let genSurgeon = new Specialty('General Surgeon');

let specialties = [psychologist, genSurgeon];

export{specialties};