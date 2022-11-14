import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ParamsService } from 'src/app/core/services/params.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  idEmp = this.route.snapshot.paramMap.get('id');
  sortEmp = this.route.snapshot.paramMap.get('sort');
  detailEmp: any;

  tmpParams: any;

  paramSort: string = '';
  paramInquiry: string = '';
  paramRows: string = '';

  constructor(
    private route: ActivatedRoute,
    private srv: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDetailEmp();

    this.route.queryParams.subscribe((data) => {
      console.log(data);
      this.tmpParams = data;
      this.paramSort = this.tmpParams.sort;
      this.paramInquiry = this.tmpParams.inquiry;
      this.paramRows = this.tmpParams.rows;
    });
  }

  handleOk() {
    this.router.navigate(['/employee'], {
      queryParams: {
        sort: this.paramSort,
        inquiry: this.paramInquiry,
        rows: this.paramRows,
      },
    });
  }

  loadDetailEmp(): void {
    this.srv.getDetailEmployee(this.idEmp).subscribe((res) => {
      this.detailEmp = res;
    });
  }
}
