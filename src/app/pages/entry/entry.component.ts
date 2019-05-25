import { Component, OnInit } from "@angular/core";
import { Entry } from "../../types/Entry";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-entry",
	templateUrl: "./entry.component.html",
	styleUrls: ["./entry.component.scss"]
})
export class EntryComponent implements OnInit {
	item: Entry | undefined;

	constructor(private router: ActivatedRoute) {
		this.item = undefined;
	}

	ngOnInit() {
		this.router.params.subscribe(({ id }) => {
			id = parseInt(id);

			if (id) {
				this.item = JSON.parse(localStorage.getItem("WT_entries")).find((item: Entry) => item.id === id);
			}
		});
	}
}
