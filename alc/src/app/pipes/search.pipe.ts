import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resultSearch :any = [];

    if(args === ''){
      return value
    }
    else{
      for(let dish of value){
        if(dish.title.indexOf(args) > -1 ){
          resultSearch.push(dish)
        }
      }
      return resultSearch;
    }
  }
}
