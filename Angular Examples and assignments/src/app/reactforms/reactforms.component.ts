import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css']
})
export class ReactformsComponent  {

  constructor(private formBuilder:FormBuilder){}
  
productForm= this.formBuilder.group(
    {
      productName: ['', [Validators.required,Validators.minLength(3), Validators.pattern('^[A-Z][a-z]*$')]],

    productAddess: this.formBuilder.group(
      {
      City:['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
     PostalCode:['', [Validators.required,Validators.minLength(6), Validators.pattern('^[0-9]{6,6}$')]]
    })
  })

  submitData() {
    console.log(this.productForm)
    console.log(this.productForm.value)

  }

}
