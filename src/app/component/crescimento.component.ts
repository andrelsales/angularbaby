import { Component, OnInit } from "@angular/core";
import { Ultrassom } from "../model/ultrassom";
import {DetailUltrassom} from "./detailultrassom.component";
import { UltrassomService}   from '../service/ultrassom.service';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';


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
    teste: String;

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
    
    exibirProximo(ultrassom : Ultrassom): void{
        console.log(ultrassom.id +1);
        this.ultrassomService.findByIdForEach(ultrassom.id +1).subscribe(
            (resposta: Ultrassom) => {
                this.selectedUltrassom = resposta;
                
            
            }
        );       
    }

        
    exibirProximoFind(ultrassom : Ultrassom): void{
        console.log("exibirProximoFind");
        this.ultrassomService.findyIdUsingFind(ultrassom.id +1).subscribe(
            (resposta: Ultrassom) => {
                this.selectedUltrassom = resposta;           
            }
        );       
    }



    getUltrassons(): void{

        this.ultrassomService.getUltrassons().subscribe(

            (ultrassons: Ultrassom[]) => {
                this.dadosBaby = ultrassons;
                // this.teste = ultrassons.toString();
            },
            (abc: string) => console.log(`Got error: ${abc}`),                    
            () => console.log(`Request completed!`)

        );


    }
 

