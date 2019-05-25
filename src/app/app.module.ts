import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./pages/home/home.module";
import { EntryComponent } from './pages/entry/entry.component';

@NgModule({
	declarations: [
		AppComponent,
		EntryComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
