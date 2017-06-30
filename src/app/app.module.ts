import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./component/app.component";
import { routing } from "./app.routing";
import { NavBAr } from "./component/navbar.component";
import { MenuComponent } from "./component/menu.component";
import { HomeComponent } from "./component/home.component";
import { EmptyComponent } from "./component/empty.component";
import { Strollers } from "./component/strollers.component";
import { Crescimento } from "./component/crescimento.component";

import { DataTableModule, SharedModule } from 'primeng/primeng';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        DataTableModule,
        SharedModule
    ],
    declarations: [
        AppComponent, NavBAr, MenuComponent, HomeComponent, EmptyComponent, Strollers, Crescimento
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

