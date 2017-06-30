import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { Ultrassom } from "../model/ultrassom";
import {DetailUltrassom} from "./detailultrassom.component";





@Component({
    selector: 'crescimento',
    templateUrl: './crescimento.component.html'
})

export class Crescimento {

    click(ultrassom: Ultrassom): void{
        console.log(ultrassom.dia);
    }

    onSelect(ultrassom: Ultrassom): void{
        
        this.selectedUltrassom = ultrassom;
        console.log(this.selectedUltrassom);
    }
    

    selectedUltrassom: Ultrassom;

    nome: String = "Livia";


    dadosBaby: Ultrassom[] = [
        { dia: "01/01/2017", peso: 45, tamanho: 4 },
        { dia: "01/02/2017", peso: 150, tamanho: 10 },
        { dia: "01/03/2017", peso: 220, tamanho: 12 },
        { dia: "01/04/2017", peso: 300, tamanho: 15 }
    ];

}
