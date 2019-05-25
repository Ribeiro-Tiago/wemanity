import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./components/home/home.module";
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchBarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
