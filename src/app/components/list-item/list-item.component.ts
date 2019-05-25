import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Entry } from "../../types/Entry";

@Component({
	selector: "app-list-item",
	templateUrl: "./list-item.component.html",
	styleUrls: ["./list-item.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ListItemComponent {
	@Input() item: Entry;
}
