import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { EntryComponent } from "./entry.component";
import { of } from "rxjs";

describe("EntryComponent", () => {
	let component: EntryComponent;
	let fixture: ComponentFixture<EntryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EntryComponent],
			imports: [
				FormsModule,
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should show error on submit with empty fields", () => {
		const ev: any = { preventDefault: () => console.log("default prevented") };
		component.onSubmit(ev);

		expect(component.firstNameErr).toBe(true);
		expect(component.lastNameErr).toBe(true);
		expect(component.phoneErr).toBe(true);
		expect(component.phoneErrText).toBe("Required field!");
	});

	it("should fail phone input validation", () => {
		const ev: any = { preventDefault: () => console.log("default prevented") };

		component.firstName = "some first name";
		component.lastName = "some last name";
		component.phone = "+32 32 22";
		component.onSubmit(ev);

		expect(component.phoneErr).toBe(true);
		expect(component.phoneErrText).toBe("Wrong phone format. E.g: +32 21 239023");
	});
});
