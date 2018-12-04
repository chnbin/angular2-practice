import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // This may cause Pefermance issue.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const result: any = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        result.push(item);
      }
    }
    return result;
  }

}
