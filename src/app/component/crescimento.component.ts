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

    constructor(private ultrassomService: UltrassomService) {         
    }

    selectedUltrassom: Ultrassom;
    nome: String = "Livia";
    dadosBaby: Ultrassom[];

    ngOnInit(): void{        
         this.getUltrassons();
    }

    click(ultrassom: Ultrassom): void{
        console.log(ultrassom.dia);
    }

    onSelect(ultrassom: Ultrassom): void{
        
        this.selectedUltrassom = ultrassom;
        console.log(this.selectedUltrassom);
    }
    getUltrassons(): void{
        this.ultrassomService.getUltrassons().subscribe(

            (ultrassons: Ultrassom[]) => this.dadosBaby = ultrassons,
            (err: string) => console.log(`Got error: ${err}`),                    
            () => console.log(`Request completed!`)

        );


    }
 

