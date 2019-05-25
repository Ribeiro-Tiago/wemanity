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
		const items = JSON.parse(localStorage.getItem("WT_entries"));

		this.allEntries = [...items];

		this.entries = [...items];
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
