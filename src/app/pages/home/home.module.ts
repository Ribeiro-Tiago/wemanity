import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@NgModule({
    declarations: [
        HomeComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
