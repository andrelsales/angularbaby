import {Component,Input} from "@angular/core";
import {Ultrassom} from "../model/ultrassom";

@Component({
selector:'detail-Ultrassom',
templateUrl:'./detailultrassom.component.html'
})


export class DetailUltrassom{

@Input()
ultrassom: Ultrassom;

@Input()
detalhe: String;

}