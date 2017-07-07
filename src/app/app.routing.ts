import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home.component";
import { EmptyComponent } from "./component/empty.component";
import { Strollers } from "./component/strollers.component";
import { Crescimento } from "./component/crescimento.component";
import { Estudo} from "./component/estudo.component";


const appRoutes: Routes = [

    { path: "", component: HomeComponent },
    { path: "carrinhos", component: Strollers },
    { path: "crescimento", component: Crescimento },
    { path: "estudo", component: Estudo },

    { path: "**", component: EmptyComponent }
];

export const routing = RouterModule.forRoot(appRoutes);