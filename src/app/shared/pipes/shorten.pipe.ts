import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, minLength: number = 50): string {
    if(value.length <= minLength) {
      return value
    }
    return value.substring(0, minLength) + ' ...';
  }

}
