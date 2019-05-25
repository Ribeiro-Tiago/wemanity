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
			{ phone: "+39 02 1234567", firstName: "Aasiyah", lastName: "Mckenna" },
			{ phone: "+39 22 1231327", firstName: "Summer", lastName: "Rossi" },
			{ phone: "+39 02 8312892", firstName: "Yosef", lastName: "Glass" },
			{ phone: "+39 35 4821902", firstName: "Pearce", lastName: "Fuller" },
			{ phone: "+39 23 5108223", firstName: "Sukhmani", lastName: "Cummings" },
		];

		this.entries = [...this.allEntries];
	}

	onSearch(value: string) {
		this.entries = this.allEntries.filter(({ firstName, lastName, phone }) => {
			return (firstName.includes(value) || lastName.includes(value) || phone.includes(value));
		});
	}
}
