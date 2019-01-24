import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'github'
})
export class GithubPipe implements PipeTransform {

  transform(value: any): any {

    let valueArr = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
    let dateCreated = new Date(valueArr[0],valueArr[1]-1, valueArr[2]);
    let now = new Date() ;
    let diff = now.getTime() - dateCreated.getTime();
    diff/=(1000 * 3600 * 24);
    return Math.floor(diff);
  }


}
