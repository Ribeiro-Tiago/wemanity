import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from "./home.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ListItemComponent } from "../../components/list-item/list-item.component";
import { FormsModule } from "@angular/forms";

describe("HomeComponent", () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HomeComponent,
				SearchBarComponent,
				ListItemComponent
			],
			imports: [
				RouterTestingModule,
				FormsModule
			],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		component.allEntries = [{
			id: "90312312",
			firstName: "jay",
			lastName: "smith",
			phone: "+32 22 2321323"
		}, {
			id: "90312312",
			firstName: "ed",
			lastName: "edmond",
			phone: "+32 22 5321323"
		}];
		component.entries = [{
			id: "90312312",
			firstName: "jay",
			lastName: "smith",
			phone: "+32 22 2321323"
		}, {
			id: "90312312",
			firstName: "ed",
			lastName: "edmond",
			phone: "+32 22 5321323"
		}];
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should filter entries by search term", () => {
		component.onSearch("ed");

		expect(component.entries.length).toBe(1);
	});
});
