import {Injectable}  from '@angular/core';
import {Http, Response} from '@angular/http';
import {GitUser} from '../model/gituser';

import {Observable} from 'rxjs';

@Injectable()
export class EstudoService{
  
  constructor(private http: Http){}

       listarGit(): Observable<GitUser[]> {
        console.log('entrou listarGit()');
       return this.http.request('https://api.github.com/users').map(
            (resposta: Response) => {
                console.log('Entrou MAP');   

                   return resposta.json().map(
                        (h: any) => {
                             console.log('AQUII ' + h.id);
                            return new GitUser(h.login, h.id);                          
                        }                       
                    )                
            }
         )            
    }
}


    // find(): Observable<Habilitacao[]> {
    //     return this.http.get('content.json').map(
    //         (r: Response) => {
    //             /*
    //             return (<any>r.json()).map(
    //                 (h: any) => {
    //                     return new Habilitacao(h.usu,h.perf,h.dt)
    //                 }
    //             )
    //             */
    //             return (<any>r.json()).map(this.mapToHabilitacao)
    //         }
    //     )
    // }
    