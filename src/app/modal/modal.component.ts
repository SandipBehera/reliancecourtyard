import { Component, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { NgFor, NgIf } from '@angular/common';
import { ServiceService } from '../service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule,FormsModule,NgIf,NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = 'Enquiry Now';
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  myForm:UntypedFormGroup|any;
  loading = false;
  @Input() user:User={name:'',email:'',phone:'', projectName:'RelianceElysium'};
 
  constructor(public activeModal: NgbActiveModal,private formbuilder:UntypedFormBuilder,private ServiceService: ServiceService) {
    this.myForm=this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+91', [Validators.required, Validators.pattern(/^\+\d{1,4}$/)]], // Pattern ensures it starts with +
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      projectName: ['RelianceElysium' ]
    })
  }
 
  
  submitFloorPlanForm() {
    // handle contact form logic
    if (this.myForm.valid) {
      this.loading = true; // Show spinner
      // Manually include the hidden static field when submitting
      const fullPhoneNumber = `${this.myForm.value.countryCode}${this.myForm.value.phone}`;
      const formData = {
        ...this.myForm.getRawValue(), // Get all form values including disabled fields
        phone: fullPhoneNumber, // Combine country code and phone number
      };
      this.ServiceService.formSubmit(formData).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          this.myForm.reset();
          this.loading = false; // Hide spinner
          location.replace('/thankyou');
        },
        error => {
          console.error('Form submission failed:', error);
          alert('Something went wrong. Please try again.');
          this.loading = false; // Hide spinner
        }
      );
      
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
