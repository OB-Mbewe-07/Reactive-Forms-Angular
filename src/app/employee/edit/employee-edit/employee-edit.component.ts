import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.services';
import { Employee } from '../../../models/employee.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss',
})
export class EmployeeEditComponent implements OnInit {
  private employeeServices = inject(EmployeeService);
  private fb = inject(FormBuilder);

  employee! : Employee;
  employeeForm! : FormGroup;

  ngOnInit(): void{
    this.employeeServices.getEmployee(1).subscribe({
      next: (data) => {
        this.employee = data; 
        this.employeeForm = this.fb.group({
          name: [data.name],
          email: [data.email],
          department: [data.department];
        })
      },
      error: (err) => {
        console.log(err); 
      }
    })
  }
}
