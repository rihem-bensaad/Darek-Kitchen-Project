import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {


  transform(value: any, args: string): any {
    console.log(value,args);

    return value.filter((element: any) => {
      return element.category == args
    });
  }

}
