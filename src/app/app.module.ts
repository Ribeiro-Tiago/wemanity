import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeModule } from "./pages/home/home.module";
import { EntryComponent } from "./pages/entry/entry.component";

import { ApiService } from "./services/api/api.service";

@NgModule({
	declarations: [
		AppComponent,
		EntryComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeModule,
		FormsModule,
		ApiService
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
