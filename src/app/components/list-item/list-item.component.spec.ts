import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ListItemComponent } from "./list-item.component";

describe("ListItemComponent", () => {
	let component: ListItemComponent;
	let fixture: ComponentFixture<ListItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ListItemComponent],
			imports: [RouterTestingModule],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListItemComponent);
		component = fixture.componentInstance;
		component.item = {
			id: "",
			firstName: "",
			lastName: "",
			phone: "",
		};
		fixture.detectChanges();
	});

	it("should create for create", () => {
		expect(component).toBeTruthy();
	});

	it("should create for edit", () => {
		component.item = {
			id: "2039302932",
			firstName: "ewqko",
			lastName: "dksoa",
			phone: "+32 23 2323232"
		};

		expect(component).toBeTruthy();
	});
});
