import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@NgModule({
    declarations: [
        HomeComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
