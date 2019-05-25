import { Component, ViewEncapsulation, OnInit } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	ngOnInit() {
		const items = [
			{ id: 39021234567, phone: "+39 02 1234567", firstName: "Aasiyah", lastName: "Mckenna" },
			{ id: 39221231327, phone: "+39 22 1231327", firstName: "Summer", lastName: "Rossi" },
			{ id: 39028312892, phone: "+39 02 8312892", firstName: "Yosef", lastName: "Glass" },
			{ id: 39354821902, phone: "+39 35 4821902", firstName: "Pearce", lastName: "Fuller" },
			{ id: 39235108223, phone: "+39 23 5108223", firstName: "Sukhmani", lastName: "Cummings" },
		].sort(this.orderAlphabetically);

		localStorage.setItem("WT_entries", JSON.stringify(items));
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
