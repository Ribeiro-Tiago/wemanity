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
		if (value.length >= 3 || value.length === 0) {
			this.emit();
		}
	}

	onEnterPress() {
		this.emit();
	}

	emit() {
		const word = this.searchTerm.trim();

		if (word.length >= 3 || word.length === 0) {
			this.onSearch.emit(word);
		}
	}
}
