import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor {
  value: string;
  onChange: (value: string) => void;
  onTouch: () => void;
  disabled: boolean;

  day: string;
  month: string;
  year: string;

  updateValue(): void {
    if (this.day && this.month && this.year) {
      const month = String(this.month).padStart(2, '0');
      const day = String(this.day).padStart(2, '0');
      this.value = `${this.year}-${month}-${day}`;
      this.onChange(this.value);
    }
  }

  writeValue(value: string): void {
    this.value = value;
    if (this.value) {
      const [ year, month, day ] = this.value.split('-');
      this.day = day;
      this.month = month;
      this.year = year;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
