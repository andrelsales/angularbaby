import { Component, OnInit } from "@angular/core";
import { Ultrassom } from "../model/ultrassom";
import {DetailUltrassom} from "./detailultrassom.component";
import { UltrassomService}   from '../service/ultrassom.service';



@Component({
    selector: 'crescimento',
    templateUrl: './crescimento.component.html',
    providers: [UltrassomService]
})

export class Crescimento implements OnInit{

    selectedUltrassom: Ultrassom;
    nome: String = "Livia";
    dadosBaby: Ultrassom[];

    ngOnInit(): void{        
         this.getUltrassons();
    }

    constructor(private ultrassomService: UltrassomService) {         
    }

    click(ultrassom: Ultrassom): void{
        console.log(ultrassom.dia);
    }

    onSelect(ultrassom: Ultrassom): void{
        
        this.selectedUltrassom = ultrassom;
        console.log(this.selectedUltrassom);
    }
    getUltrassons(): void{
        this.dadosBaby = this.ultrassomService.getUltrassons();
    }

 dadosBaby: Ultrassom[];}
