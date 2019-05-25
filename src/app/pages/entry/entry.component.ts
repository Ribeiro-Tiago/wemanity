import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Entry } from "../../types/Entry";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-entry",
	templateUrl: "./entry.component.html",
	styleUrls: ["./entry.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class EntryComponent implements OnInit {
	private phoneRegex: RegExp;
	private allEntries: Entry[];
	firstName: string;
	lastName: string;
	phone: string;
	phoneErrText: string;
	currItemIdx: number;
	firstNameErr: boolean;
	lastNameErr: boolean;
	phoneErr: boolean;
	isNewUser: boolean;

	constructor(private router: ActivatedRoute) {
		this.phoneRegex = /^[+][0-9]{2}[\s][0-9]{2}[\s][0-9]{6,}/;
		this.firstName = "";
		this.lastName = "";
		this.phone = "";
		this.phoneErrText = "";
		this.firstNameErr = false;
		this.lastNameErr = false;
		this.phoneErr = false;
		this.isNewUser = true;
		this.allEntries = [];
		this.currItemIdx = -1;
	}

	ngOnInit() {
		this.allEntries = JSON.parse(localStorage.getItem("WT_entries"));

		this.router.params.subscribe(({ id }) => {
			id = Number(id);

			if (id) {
				const { firstName, lastName, phone } = this.allEntries.find((item: Entry, index: number) => {
					if (item.id === id) {
						this.currItemIdx = index;
						return true;
					}

					return false;
				});

				this.firstName = firstName;
				this.lastName = lastName;
				this.phone = phone;
				this.isNewUser = false;
			}
		});
	}

	onSubmit(ev: Event) {
		ev.preventDefault();

		this.firstNameErr = (!this.firstName);
		this.lastNameErr = (!this.lastName);

		if (this.phone) {
			if (this.phoneRegex.test(this.phone)) {
				this.phoneErr = false;
			} else {
				this.phoneErr = true;
				this.phoneErrText = "Wrong phone format. E.g: +32 21 239023";
			}
		} else {
			this.phoneErr = true;
			this.phoneErrText = "Required field!";
		}

		if (this.phoneErr || this.firstNameErr || this.lastNameErr) {
			return;
		}

		const newItem: Entry = {
			firstName: this.firstName,
			lastName: this.lastName,
			phone: this.phone,
			id: 31232
		};

		if (this.isNewUser) {
			this.allEntries.push(newItem);
		} else {
			this.allEntries[this.currItemIdx] = newItem;
		}

		localStorage.setItem("WT_entries", JSON.stringify(this.allEntries));

		console.log("created", this.allEntries);
	}
}
