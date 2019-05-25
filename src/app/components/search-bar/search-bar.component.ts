import { Component, ViewEncapsulation, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent {
	searchTerm: string;

	@Output() onSearch = new EventEmitter<string>();

	constructor() {
		this.searchTerm = "";
	}

	onTextChange(value: string) {
		if (value.length >= 3) {
			this.emit();
		}
	}

	onEnterPress() {
		this.emit();
	}

	emit() {
		if (this.searchTerm.length >= 3) {
			this.onSearch.emit(this.searchTerm);
		}
	}
}
