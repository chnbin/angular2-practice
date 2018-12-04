import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limitation: number) {
    if (value.length < limitation) {
      return value;
    }

    return value.substring(0, limitation) + '... ';
  }
}