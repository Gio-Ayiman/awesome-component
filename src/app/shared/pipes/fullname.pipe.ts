import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: {lastname: string, firstname: string}, locale: 'en' | 'fr' = 'fr'): string {
    return locale === 'fr' ?
    `${value.lastname.toUpperCase()} ${value.firstname}` :
    `${value.firstname} ${value.firstname}`;
  }
}
