import {Injectable}  from '@angular/core';
import {Ultrassom}   from '../model/ultrassom';
import {ULTRAS}  from '../model/mockultrassons';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs';

@Injectable()
export class UltrassomService{
  
  constructor(private http: Http){}

    getUltrassons(): Observable<Ultrassom[]>{        
        console.log('entrou servico');
    return this.http.get('conteudo.json').map(
        (u: Response) => {       
                          
                 return (<any>u.json()).map(
                     (u: any) => {
                          console.log(u); 
                         return new Ultrassom(u.id,u.dia,u.peso,u.batimento);
                     }
                 )                
               // return (<any>r.json()).map(this.mapToHabilitacao)  // public dia: string, public peso: number, public tamanho: number) {
            }
        )        
    }

    findByIdForEach(id:Number): Observable<Ultrassom>{
        console.log('ENTROU findByIdForEach')
       return this.http.get('conteudo.json').map(
            (r: Response) => {
                let ultrassom: Ultrassom;                
                (r.json()).forEach(element => {
                    if(element.id == id){
                         console.log('ENT 2')
                        ultrassom = new Ultrassom(element.id,element.dia,element.peso,element.batimento)
                    }                    
                });
                return ultrassom;
            }
        )
    }

    findyIdFilter(id:Number) : Observable<Ultrassom>{
        console.log('findyIdFilter');
           

    return null;
        
    }

// function getCountryByCode(code) {
//   return data.filter(
//       function(data){ return data.code == code }
//   );
// }


/* 
    findById(id: Number): Observable<Habilitacao>{
       return this.http.get('content.json').map(
            (r: Response) => {
                let habilitacao: Habilitacao;
                // console.log('entrou');
                
                (<any>r.json()).forEach(element => {
                    if(element.id == id)
                    {                
                        habilitacao = new Habilitacao(element.id, element.usu,element.perf,element.dt);
                    }
                });               

                return habilitacao;
            }  
       
       )       
    }*/



/*    constructor(private http: Http){}

    find(): Observable<Habilitacao[]> {
        return this.http.get('content.json').map(
            (r: Response) => {
                
                // return (<any>r.json()).map(
                //     (h: any) => {
                //         return new Habilitacao(h.usu,h.perf,h.dt)
                //     }
                // )
                
                return (<any>r.json()).map(this.mapToHabilitacao)
            }
        )
    }*/


}


/*getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}


var t = Observable.timer(2000, 4000);
t.subscribe(() => {console.log('Ich')});*/