import { Component,OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {Http, Response} from '@angular/http';
import {EstudoService} from "../service/estudo.service";
import {GitUser} from "../model/gituser";

@Component({
    selector: 'estudo',
    templateUrl: './estudo.component.html',
    providers: [EstudoService]  
})
export class Estudo implements OnInit {
    
    constructor(private http: Http, private estudoSerive : EstudoService){}

    dadosGitUser: GitUser[];

    ngOnInit(): void {
       console.log('INIT1 ESTUDO COMPONENTE');
  
      
       this.estudoSerive.listarGit().subscribe(           
           (r:GitUser[]) => {              
               this.dadosGitUser = r;
               
                }           
           )

    console.log('INIT2 ESTUDO COMPONENTE');

    
    }

    // return this.http.get('conteudo.json').map(
    //     (u: Response) => {
    //              console.log('moises 1');
                          
    //              return (<any>u.json()).map(
    //                  (u: any) => {
    //                       console.log(u); 
    //                      return new Ultrassom(u.dia,u.peso,u.batimento);
    //                  }
    //              )
                
    //            // return (<any>r.json()).map(this.mapToHabilitacao)  // public dia: string, public peso: number, public tamanho: number) {
    //         }
    //     )
 
}
// var requestStream = Rx.Observable.just('https://api.github.com/users');
// return this.http.get('conteudo.json').map(

/*
    testarMap(): void{
        this.http.request('https://api.github.com/users').map(

            (resposta: Response) => {
                console.log('Entrou aqui');
                console.log(resposta);
            }
        )
}*/