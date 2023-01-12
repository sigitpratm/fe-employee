import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [MessageService],
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  title = 'pagination';
  inquiry: string = '';
  sort: string = 'id';
  dataEmp: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 0;
  tableSizes: any = [10, 15, 20];
  optSort = [
    { label: 'No', value: 'id' },
    { label: 'First Name', value: 'firstName' },
    { label: 'Last Name', value: 'lastName' },
    { label: 'Group', value: 'group' },
  ];
  id: any;
  tmpId: any;
  optRows: any;

  passSort: string = 'id';
  passInquiry: string = '';
  passRows: string = '10';

  tmpParams: any;

  constructor(
    private srv: EmployeeService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.tmpParams = data;
      let x = Object.keys(this.tmpParams).length;
      x === 0 ? (this.tableSize = 10) : (this.tableSize = this.tmpParams.rows);
      x === 0 ? (this.sort = 'id') : (this.sort = this.tmpParams.sort);
      x === 0 ? (this.inquiry = '') : (this.inquiry = this.tmpParams.inquiry);
    });

    this.empList();
  }

  ngAfterViewInit(): void {}

  onDetail(id: any) {
    this.router.navigate([`employee/detail/${id}`], {
      queryParams: {
        sort: this.sort,
        rows: this.tableSize,
        inquiry: this.inquiry,
      },
    });
  }

  empList(): void {
    this.srv
      .getAllEmployee(this.inquiry, this.sort, this.tableSize)
      .subscribe((res) => {
        this.dataEmp = res;
      });
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.empList();
  }

  onSort(event: any): void {
    this.sort = event.target.value;
    this.page = 1;
    this.empList();
  }

  onSearch(event: any): void {
    this.inquiry = event.target.value;
    this.page = 1;
    this.empList();
  }

  onEdit() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Service Message',
      detail: 'Edit button clicked',
    });
  }

  onDelete() {
    this.messageService.add({
      severity: 'error',
      summary: 'Service Message',
      detail: 'Delete button clicked',
    });
  }
}
