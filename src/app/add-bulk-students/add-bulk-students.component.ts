import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../shared/crud.service';
import { Student } from '../shared/student';
@Component({
  selector: 'app-add-bulk-students',
  templateUrl: './add-bulk-students.component.html',
  styleUrls: ['./add-bulk-students.component.scss']
})
export class AddBulkStudentsComponent implements OnInit {

  storeData: any; 
  jsonData: any;  
  workBook: any;
  fileUploaded: File;  
  worksheet: any;
  userData: any;

  constructor(
    private crudApi: CrudService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
  }


  uploadExcel(e:any) {
  
    try{
    
    const fileName = e.target.files[0].name;
    
    import('xlsx').then(xlsx => {
      let jsonData = null;
      const reader = new FileReader();
      // const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        this.workBook = xlsx.read(data, { type: 'binary' });
        jsonData = this.workBook.SheetNames.reduce((initial:any, name:any) => {
          const sheet = this.workBook.Sheets[name];
          initial[name] = xlsx.utils.sheet_to_json(sheet);
          return initial;
        }, {});
        this.userData = jsonData[Object.keys(jsonData)[0]];
        // console.log("=======>", this.userData);
  
      };
      reader.readAsBinaryString(e.target.files[0]);
    });
  
  }catch(e){
     console.log('error', e);
  }
  
  }

  addUsers() {
    if(this.userData) {
      var currData = {};
      this.userData.forEach(element => {
        currData['firstName'] = element.firstName;
        currData['lastName'] = element.lastName;
        currData['email'] = element.email;
        currData['mobileNumber'] = element.mobileNumber;

        this.crudApi.AddStudent(currData);
        this.toastr.success(currData['firstName'] + ' successfully added!');
      });
    } else {

      this.toastr.error('please upload a file first !')
    }
    
  }

}
