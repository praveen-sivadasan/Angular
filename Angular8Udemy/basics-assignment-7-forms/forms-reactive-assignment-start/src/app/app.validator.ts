import {FormControl} from '@angular/forms';

export function duplicateNameValidator(control: FormControl): {} | null {
  if (control.value && control.value === 'Test') {
    return {'invalidName': true};
  }
  return null;
}


export function duplicateNameValidatorAsync(control: FormControl) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value && control.value === 'Test') {
        resolve({'invalidName': true});
      }
      resolve(null);
    }, 2000);
  })
  return p;
}
