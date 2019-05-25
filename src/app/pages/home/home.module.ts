import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ListItemComponent } from "../../components/list-item/list-item.component";

@NgModule({
    declarations: [
        HomeComponent,
        SearchBarComponent,
        ListItemComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
