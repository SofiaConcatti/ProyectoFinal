import { Component, Inject } from '@angular/core';
// import { inject } from '@angular/core/testing';
import { FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../../../models/student.model';



@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent  {

  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl
  })

  constructor(private readonly dialogRef: MatDialogRef<StudentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Student | null){
    console.log(data);
    if(data){
      this.studentForm.patchValue(data)
    }
  }
  close(){
    this.dialogRef.close()
  }
}
