import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form-number',
  templateUrl: './dynamic-form-number.component.html',
  styleUrls: ['./dynamic-form-number.component.css']
})
export class DynamicFormNumberComponent implements OnInit {
  myFormGroup: FormGroup;
  myFormGroupSubs: Subscription;
  number_of_books: number[];

  constructor() { }
  ngOnInit() {
    let group = {}
    group['number_of_books'] = new FormControl('');
    this.myFormGroup = new FormGroup(group);
    this.myFormGroupSubs = this.myFormGroup.valueChanges.subscribe(val => {
      this.handleNumberChange(val);
    })
  }
  handleNumberChange(val) {
    //Try to Remove Control for higher number if any.
    const val_plus_one = parseInt(val.number_of_books) + 1
    try {
      this.myFormGroup.removeControl(val_plus_one.toString())
    } catch { }
    //Add formControls for 1 - number of books that user enters.
    const numbers = Array().fill(1,val_plus_one).map((_, idx) => idx + 1)
    numbers.forEach((num) => {
      const fc = new FormControl('');
      this.myFormGroup.addControl(num.toString(), fc)
    })
    this.number_of_books = numbers;
  }
  onSubmit() {
    console.log(this.myFormGroup.value);
  }
}