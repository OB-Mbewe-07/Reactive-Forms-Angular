import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.services';
import { Employee, EmployeeExperience } from '../../../models/employee.model';
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
  private frmBuilder = inject(FormBuilder);

  employee! : Employee;
  employeeForm! : FormGroup;

  skills_available = ['TypeScript', 'Angular', 'CSS', 'JavaScript', 'HTML', 'Node.js'];

  ngOnInit(): void{
    this.employeeServices.getEmployee(1).subscribe({
      next: (data) => {
        this.employee = data; 
        this.employeeForm = this.frmBuilder.group({
          name: [data.name],
          email: [data.email],
          department: [data.department],
          skills: this.frmBuilder.array(
            this.skills_available.map(skill =>
              this.frmBuilder.control(data.skills.includes(skill))
            )
          ),
          experiences: this.frmBuilder.array(
            data.experiences.map(exp => this.createExperienceGroup(exp))
          )
        })
      },
      error: (err) => {
        console.log(err); 
      }
    })
  }

  createExperienceGroup(experience : EmployeeExperience): FormGroup {
    return this.frmBuilder.group({
      company: [experience.company],
      role: [experience.role],
      years: [experience.years],
    })
  }
}
