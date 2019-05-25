import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
	numbers: string[];

	constructor() {
		this.numbers = [
			"+39 02 1234567",
			"+39 22 1231327",
			"+39 02 8312892",
			"+39 35 4821902",
			"+39 23 5108223",
		];
	}
}
