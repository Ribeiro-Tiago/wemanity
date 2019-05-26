import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { ApiService } from "./services/api/api.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	constructor(private api: ApiService) { }

	ngOnInit() {
		this.api.get("entry").then((result) => {
			if (result) {
				localStorage.setItem("WT_entries", JSON.stringify(result));
			} else {
				localStorage.setItem("WT_entries", JSON.stringify([]));
			}
		});
	}
}
