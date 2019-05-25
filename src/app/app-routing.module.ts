import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { EntryComponent } from "./pages/entry/entry.component";

const routes: Routes = [{
	path: "",
	component: HomeComponent
}, {
	path: "edit/:id",
	component: EntryComponent
}, {
	path: "create",
	component: EntryComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	declarations: []
})

export class AppRoutingModule { }
