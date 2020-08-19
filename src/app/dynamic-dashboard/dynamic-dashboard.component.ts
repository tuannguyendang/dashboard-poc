import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import *  as  form_template from '../../assets/GetLayout_HL_Json.json';

@Component({
  selector: 'app-dynamic-dashboard',
  templateUrl: './dynamic-dashboard.component.html',
  styleUrls: ['./dynamic-dashboard.component.css']
})
export class DynamicDashboardComponent implements OnInit {

  myFormGroup:FormGroup;
  formTemplate: any; 
  payLoad: any;

  constructor() { }

  ngOnInit(): void {
    this.formTemplate = this.getFormTemplate();
    console.log(this.formTemplate);
    let group={}    
    this.formTemplate.forEach(input_template=>{
      console.log(input_template);
      group[input_template.fieldid]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
  }

  onSubmit(){
    console.log(this.myFormGroup.value);
    this.payLoad = JSON.stringify(this.myFormGroup.value);
  }

  getFormTemplate() {
    return (form_template as any).default.layoutMasterData[0].fieldMasterData;
  }
}
