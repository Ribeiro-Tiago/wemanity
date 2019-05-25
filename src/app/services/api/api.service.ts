import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class ApiService {
	private baseURL: string;

	constructor() {
		this.baseURL = environment.api;
	}

	async get(endpoint: string) {
		return (await fetch(`${this.baseURL}/${endpoint}`)).json();
	}

	async post(endpoint: string, data: any) {
		return this.postFunc(endpoint, data, "post");
	}

	async put(endpoint: string, data: any) {
		return this.postFunc(endpoint, data, "put");
	}

	private async postFunc(endpoint: string, data: any, method: "post" | "put") {
		return (await fetch(`${this.baseURL}/${endpoint}`, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		})).json();
	}
}
