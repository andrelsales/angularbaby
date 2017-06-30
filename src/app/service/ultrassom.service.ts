import {Injectable}  from '@angular/core';
import {Ultrassom}   from '../model/ultrassom';
import {ULTRAS}  from '../model/mockultrassons'

@Injectable()
export class UltrassomService{

    getUltrassons(): Ultrassom[]{
        return ULTRAS;
    }

}


