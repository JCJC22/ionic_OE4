import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  student_no: any;
  student_name: any;
  email: any;
  contact_no: any;
  address: any;

  students: any = [];


  constructor(public _apiService:ApiService) {}

  addStudent(){
    console.log (this.student_no, this.student_name, this.email);

    let data = {
      student_no: this.student_no,
      student_name: this.student_name,
      email: this.email,
      contact_no: this.contact_no,
      address: this.address

    }
    this._apiService.addStudent(data).subscribe((res:any)=>
    {
      console.log("Success ==", res);
      this.student_no = '';
      this.student_name = '';
      this.email = '';
      this.contact_no = '';
      this.address = '';
      alert("SUCCESS");
    }, (error:any)=>{
      alert("ERROR");
      console.log("Error = ", error);
    });
  }
}
