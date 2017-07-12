import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pesoFormatado' })
export class PesoPipe implements PipeTransform {

    transform(peso: string): string {
        if(peso == null)
        {
            return '';
        }
        else{

            return `${peso} Gramas`;
        }
        
    }
}

// @Pipe({name: 'formatNumero'})
// export class FormatNumeroPipe implements PipeTransform{
//     transform(valor: string): string{
//         return "#" + valor;
       
//     }
// }

// import { Pipe, PipeTransform } from '@angular/core';

// import { Gallery } from '../model/gallery';

// @Pipe({ name: 'public' })
// export class PublicPipe implements PipeTransform {
//     transform(galleries: Gallery[]): Gallery[] {
//         if (galleries) {
//             return galleries.filter(gallery => gallery.isPublic);
//         } else {
//             return [];
//         }
//     }
// }