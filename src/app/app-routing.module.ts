import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBulkStudentsComponent } from './add-bulk-students/add-bulk-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes =  [
  { path: '', redirectTo: '/view-students', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'add-bulk-students', component: AddBulkStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
