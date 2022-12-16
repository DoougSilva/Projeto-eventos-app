import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chamber'
})
export class ChamberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'SALA_1': return 'looks_one';
      case 'SALA_2': return 'looks_two';
      case 'SALA_3': return 'looks_3';
      case 'SALA_4': return 'looks_4';
      case 'SALA_5': return 'looks_5';
    }
    return '';
  }

}
