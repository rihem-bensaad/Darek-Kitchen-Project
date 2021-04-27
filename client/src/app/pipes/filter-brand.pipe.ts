import { Pipe, PipeTransform } from '@angular/core';
// import {BrandService} from "../services/brand.service"

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {


  transform(value: any, args: string): any {
    console.log(value,args);

    return value.filter((element: any) => {
      return element.category == args
    });
  }

}
