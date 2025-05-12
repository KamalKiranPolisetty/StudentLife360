import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  paymentForm!: FormGroup;
@Output() purchaseMealPlan: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required as ValidatorFn]],
      expiryDate: ['', [Validators.required as ValidatorFn]],
      cvv: ['', [Validators.required as ValidatorFn]],
      cardHolder: ['', [Validators.required as ValidatorFn]]
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      this.purchaseMealPlan.emit();
      console.log('Payment form submitted:', this.paymentForm.value);
    } else {
      console.log('Invalid form submission');
    }
  }
}