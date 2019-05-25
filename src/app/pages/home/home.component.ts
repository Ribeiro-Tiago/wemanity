import { Component, ViewEncapsulation } from "@angular/core";
import { Entry } from "../../types/Entry";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
	private allEntries: Entry[];
	entries: Entry[];

	constructor() {
		this.allEntries = [
			{ id: 39021234567, phone: "+39 02 1234567", firstName: "Aasiyah", lastName: "Mckenna" },
			{ id: 39221231327, phone: "+39 22 1231327", firstName: "Summer", lastName: "Rossi" },
			{ id: 39028312892, phone: "+39 02 8312892", firstName: "Yosef", lastName: "Glass" },
			{ id: 39354821902, phone: "+39 35 4821902", firstName: "Pearce", lastName: "Fuller" },
			{ id: 39235108223, phone: "+39 23 5108223", firstName: "Sukhmani", lastName: "Cummings" },
		].sort(this.orderAlphabetically);

		this.entries = [...this.allEntries];
	}

	onSearch(value: string) {
		if (value === "") {
			this.entries = [...this.allEntries];
			return;
		}

		value = value.toLowerCase();

		this.entries = this.allEntries.filter(({ firstName, lastName, phone }) => {
			firstName = firstName.toLowerCase();
			lastName = lastName.toLowerCase();

			return (firstName.includes(value) || lastName.includes(value) || phone.includes(value));
		});
	}

	private orderAlphabetically(a, b) {
		if (a.firstName < b.firstName) {
			return -1;
		}

		if (a.firstName > b.firstName) {
			return 1;
		}

		return 0;
	}
}
