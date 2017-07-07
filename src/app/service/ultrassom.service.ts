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

    // const tal = (x: number) => 50 * x;
    // console.log(tal(4));

    return this.http.get('conteudo.json').map(
        (u: Response) => {
       
                          
                 return (<any>u.json()).map(
                     (u: any) => {
                          console.log(u); 
                         return new Ultrassom(u.dia,u.peso,u.batimento);
                     }
                 )
                
               // return (<any>r.json()).map(this.mapToHabilitacao)  // public dia: string, public peso: number, public tamanho: number) {
            }
        )
        //return ULTRAS;
    }
// this.http.get(myApiUrl)
//                     .map(res=>res.json())
//                     .catch(err=>{
//                        throw new Error(err.message);  
//                     });    }


//  return this.http.get(this.commentsUrl)
//                 // ...and calling .json() on the response to return data
//                  .map((res:Response) => res.json())
//                  //...errors if any
//                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


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