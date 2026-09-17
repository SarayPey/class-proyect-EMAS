import {doctors} from './Data/doctors.js';

let docShow = document.querySelector('#docShow');
console.log(doctors);

for (let doctor in doctors) {
	let element = doctors[doctor];
	console.log(element);
	let docData = document.createElement('p');
	docData.style.marginBottom = '25px';
	docData.style.color = 'var(--c1)';
	docData.innerHTML = element.showDoctorInfo();
	docShow.appendChild(docData);
}
