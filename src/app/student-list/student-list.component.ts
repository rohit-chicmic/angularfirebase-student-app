import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Student } from './../shared/student'; 
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  p: number = 1;
  Student: Student[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  masterSelected:boolean;
  checkedList:any;
  

  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService
    ){ }


  ngOnInit() {
    this.masterSelected=false;
    this.dataState();
    let s = this.crudApi.GetStudentsList(); 
    s.snapshotChanges().subscribe(data => {
      this.Student = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        a['isSelected']=false;
        this.Student.push(a as Student);
      })
    })
  }

  dataState() {     
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

  deleteStudent(student) {
    if (window.confirm('Are sure you want to delete this student ?')) { 
      this.crudApi.DeleteStudent(student.$key)
      this.toastr.success(student.firstName + ' successfully deleted!');
    }
  }

  public exportToFile() {

    let tbl = document.getElementById("dataTable");
    let wb = XLSX.utils.table_to_book(tbl);
    XLSX.writeFile(wb, "student_data" + '.xlsx');
  }

  public downloadAll() {
    let ws = XLSX.utils.json_to_sheet(this.Student);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, "all_student_data.xlsx");
  }


  checkUncheckAll() {
    for (var i = 0; i < this.Student.length; i++) {
      this.Student[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.Student.every(function(student:any) {
        return student.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.Student.length; i++) {
      if(this.Student[i].isSelected)
      this.checkedList.push(this.Student[i].$key);
    }
    this.checkedList = JSON.stringify(this.checkedList);
    console.log(this.checkedList);
  }


}