import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./component/app.component";
import { routing } from "./app.routing";
import { NavBAr } from "./component/navbar.component";
import { MenuComponent } from "./component/menu.component";
import { HomeComponent } from "./component/home.component";
import { EmptyComponent } from "./component/empty.component";
import { Strollers } from "./component/strollers.component";
import { Crescimento } from "./component/crescimento.component";
import {DetailUltrassom} from "./component/detailultrassom.component";
import {Estudo} from "./component/estudo.component";


import { DataTableModule, SharedModule } from 'primeng/primeng';

import { PesoPipe} from './pipe/peso.pipe';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        DataTableModule,
        SharedModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent, NavBAr, MenuComponent, HomeComponent, EmptyComponent, Strollers, Crescimento, 
        DetailUltrassom,Estudo,PesoPipe
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

