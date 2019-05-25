import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [{
	path: "",
	component: HomeComponent
}, {
	path: "edit/:id",
	component: HomeComponent
}, {
	path: "create",
	component: HomeComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	declarations: []
})

export class AppRoutingModule { }
