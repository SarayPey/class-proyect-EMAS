class Appointment {
	#patient;
	#doctor;
	#date;
	#time;
	#reason;
	constructor(patient, doctor, date, time, reason) {
		this.#patient = patient;
		this.#doctor = doctor;
		this.#date = date;
		this.#time = time;
		this.#reason = reason;
	}
	showAppointment(){
		return this.#patient, this.#doctor, this.#date, this.#time, this.#reason;
	}
}

export { Appointment }