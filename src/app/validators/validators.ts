import { FormControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
/*
export const validDate = (control: FormControl): ValidationErrors => {
  const value = control.value;
  const isValid = value ? moment(value).isValid() : true;
  return isValid ? null : { validDate: true };
};

export const maxDate = (max: string) => {
  return (control: FormControl): ValidationErrors => {
    const maxDay = moment(max);
    const value = control.value;
    const isValid = value ? moment(value).isBefore(maxDay) : true;
    return isValid ? null : { maxDate: true };
  };
};
*/
export class DateValidators {
  static valid(control: FormControl): ValidationErrors {
    const value = control.value;
    const isValid = value ? moment(value).isValid() : true;
    return isValid ? null : { validDate: true };
  }

  static max(maxDate: string): (control: FormControl) => ValidationErrors {
    return (control: FormControl): ValidationErrors => {
      const maxDay = moment(maxDate);
      const value = control.value;
      const isValid = value ? moment(value).isBefore(maxDay) : true;
      return isValid ? null : { maxDate: true };
    };
  }
}

export class ServerValidators {
  static dni(control: FormControl): Observable<ValidationErrors | null> {
    let isValid = null;
    if (control.value === '1111111') {
      isValid = { dniInvalid: true };
    }
    return of(isValid);
  }
}
