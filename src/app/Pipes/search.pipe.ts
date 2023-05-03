import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], Searchtext: any): any {
    if (Searchtext) {
       return array.filter((x: any) => x.Name.toLowerCase().includes(Searchtext.toLowerCase()) );
     } else {
       return array;
     }
    }

}
