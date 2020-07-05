import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  userForm; 
  userDetails=[];
  constructor(private fb:FormBuilder) {
    
    this.userForm = this.fb.group({
      'Name' : this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      'Mail-id':this.fb.control('',[Validators.required,Validators.maxLength(250),Validators.minLength(10),(Validators.pattern('[a-z0-9.@]*'))]),
      'Date-of-Birth':this.fb.control(''),
      'age' : this.fb.control('',[Validators.required,Validators.min(18),Validators.max(55)]),
      'Gender':this.fb.control('',Validators.required),
      'Marital Status':this.fb.control(''),
      'FavFood':this.fb.control(''),

      'country' : this.fb.control('IN'),
      'address' : this.fb.array([
        this.fb.group({
          'streetname' : this.fb.control('',[Validators.required]),
          'Doorno':this.fb.control(''),
          'zipcode' : this.fb.control('')
        })
      ])
    })
    console.log(this.userForm);
  }
  submitForm(){
    if(this.userForm.valid){
       console.log(this.userForm.value);
       this.userDetails.push(this.userForm.value);
    }
   }
  
 

}
