import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import *  as  form_template from '../../assets/layout_hl.json';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.css']
})
export class DynamicFormJsonComponent implements OnInit {

  myFormGroup:FormGroup;
  formTemplate: any; 

  constructor() { }

  ngOnInit(): void {
    this.formTemplate = this.getFormTemplate();
    console.log(this.formTemplate);
    let group={}    
    this.formTemplate.forEach(input_template=>{
      console.log(input_template);
      group[input_template.label]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
  }

  onSubmit(){
    console.log(this.myFormGroup.value);
  }

  getFormTemplate() {
    return (form_template as any).default;
  }
}