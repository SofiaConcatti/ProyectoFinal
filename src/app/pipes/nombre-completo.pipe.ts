import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(alumno: Student): string {
    return `${alumno.firstName} ${alumno.lastName}`;
  }
}
