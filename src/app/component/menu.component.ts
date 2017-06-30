import {Component,OnInit} from '@angular/core';

import {MenubarModule,MenuItem} from 'primeng/primeng';

@Component({    
    selector:'menu',
    templateUrl:'./menu.component.html'

})
export class MenuComponent implements OnInit{

     items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'fa-refresh'},
                {label: 'Redo', icon: 'fa-repeat'}
            ]
        }];
    }
}