import {doctors} from './Data/doctors.js';
import {patients} from './Data/patients.js';
import {appointments} from './Data/appointments.js';

let docShow = document.querySelector('#docShow');
let patShow = document.querySelector('#patShow');
let appoShow = document.querySelector('#appoShow');
console.log(doctors);
console.log(patients);
console.log(appointments);

if(docShow){
	for (let doctor in doctors) {
		let element = doctors[doctor];
		console.log(element);
		let docData = document.createElement('p');
		docData.style.margin = '1rem';
		docData.style.backgroundColor = 'var(--c3)';
		docData.style.padding = '1rem';
		docData.style.border = '0.188rem solid';
		docData.style.borderRadius = '1rem';
		docData.style.color = 'var(--c1)';
		docData.innerHTML = element.showDoctorInfo();
		docShow.appendChild(docData);
	};
}

if(patShow){
	for (let patient in patients) {
		let element = patients[patient];
		console.log(element);
		let patData = document.createElement('p');
		patData.style.margin = '1rem';
		patData.style.backgroundColor = 'var(--c3)';
		patData.style.padding = '1rem';
		patData.style.border = '0.188rem solid';
		patData.style.borderRadius = '1rem';
		patData.style.color = 'var(--c1)';
		patData.innerHTML = element.showPatientInfo();
		patShow.appendChild(patData);
	};
}