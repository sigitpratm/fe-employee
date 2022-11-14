import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  providers: [MessageService],
})
export class EmployeeAddComponent implements OnInit {
  maxDateStart = new Date();
  pipe = new DatePipe('en-US');

  constructor(
    private formBuilder: FormBuilder,
    private srv: EmployeeService,
    private router: Router,
    private messageService: MessageService
  ) {}

  formAdd = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    birthDate: [new Date(), Validators.required],
    basicSalary: ['', Validators.required],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSaveAdd() {
    let tmpBd = this.pipe.transform(this.formAdd.value.birthDate, 'shortDate');

    const form = {
      username: this.formAdd.value.username,
      firstName: this.formAdd.value.firstName,
      lastName: this.formAdd.value.lastName,
      email: this.formAdd.value.email,
      birthDate: tmpBd,
      basicSalary: this.formAdd.value.basicSalary,
      status: this.formAdd.value.status,
      group: this.formAdd.value.group,
      description: this.formAdd.value.description,
    };

    if (this.formAdd.status == 'VALID') {
      firstValueFrom(this.srv.addEmployee(form))
        .then((res) => {
          this.formAdd.reset();
          this.router.navigate(['employee']);
          this.messageService.add({
            severity: 'success',
            summary: 'Service Message',
            detail: 'Success add new employee',
          });
        })
        .catch((error) => {
          console.log(error);
          this.formAdd.markAllAsTouched();
        });
    } else {
      console.log(this.formAdd);

      this.messageService.add({
        severity: 'error',
        summary: 'Service Message',
        detail: 'All field is required, please fill again',
      });
    }
  }
}
