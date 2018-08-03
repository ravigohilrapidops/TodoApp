import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleantransform'
})
export class BooleantransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value==true)?'Completed':'Pending';
  }

}
