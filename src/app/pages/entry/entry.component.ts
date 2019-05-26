import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Entry } from "../../types/Entry";
import { ApiService } from "../../services/api/api.service";

@Component({
	selector: "app-entry",
	templateUrl: "./entry.component.html",
	styleUrls: ["./entry.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class EntryComponent implements OnInit {
	private phoneRegex: RegExp;
	allEntries: Entry[];
	firstName: string;
	lastName: string;
	phone: string;
	phoneErrText: string;
	currItemIdx: number;
	firstNameErr: boolean;
	lastNameErr: boolean;
	phoneErr: boolean;
	isNewUser: boolean;
	showAlert: boolean;
	isLoading: boolean;
	userID: string;

	constructor(public router: ActivatedRoute, private api: ApiService) {
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
		this.isLoading = false;
		this.showAlert = false;
		this.userID = "";
	}

	ngOnInit() {
		this.allEntries = JSON.parse(localStorage.getItem("WT_entries"));

		this.router.params.subscribe(({ id }) => {
			if (id) {
				const { firstName, lastName, phone } = this.allEntries.find((item: Entry, index: number) => {
					if (item.id === id) {
						this.currItemIdx = index;
						this.userID = id;
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

		this.isLoading = true;
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
			this.isLoading = false;
			return;
		}

		const item: any = {
			firstName: this.firstName,
			lastName: this.lastName,
			phone: this.phone
		};

		let call: Promise<any>;

		if (this.isNewUser) {
			call = this.api.post("entry", item);
			this.allEntries.push(item);
			this.isNewUser = false;
		} else {
			call = this.api.put(`entry/${this.userID}`, item);
			this.allEntries[this.currItemIdx] = item;
		}

		call.then((result) => {
			this.userID = result.id;
			localStorage.setItem("WT_entries", JSON.stringify(this.allEntries));
			this.isLoading = false;
			this.showAlert = true;
			setTimeout(() => {
				this.showAlert = false;
			}, 3000);
		});
	}
}
