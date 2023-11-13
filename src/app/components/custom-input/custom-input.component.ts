import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomInputComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-input',
  templateUrl: 'custom-input.component.html',
  styleUrls: ['custom-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})

export class CustomInputComponent implements ControlValueAccessor {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  value: any = ""; // Adicione esta linha

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: any): void {
    this.onChange(event.target.value);
    this.onTouched();
  }
}