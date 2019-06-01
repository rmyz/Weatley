import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterReport } from '../../core/filterEntities/filterReport';
import { ReportDataService } from '../../core/data-services/reports-data.service';
import { Report } from '../../core/entities/report';
import { IsLoggedService } from '../../core/services/isLogged.service';

@Component({
	selector: 'app-report-table',
	templateUrl: './report-table.component.html',
	styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
	displayedColumnsReport = ['name', 'surname', 'description', 'date', 'status'];
	dataSourceReport: MatTableDataSource<FilterReport>;

	olderReports: FilterReport[] = [];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;


	constructor(private reportDataService: ReportDataService,
				private dialog: MatDialog,
				public snackBar: MatSnackBar,
				private updateReports: IsLoggedService) { }

	ngOnInit() {
		this.loadData();
		this.updateReports.getMessage().subscribe(res => {
			if (res) {
				this.loadData();
			}
		});

	}

	loadData() {
		this.reportDataService.getReports().subscribe(reports => {
			reports.forEach(report => {
				if (report.status !== 'pending') {
					this.olderReports.push(new FilterReport({
						id: report.id,
						description: report.description,
						date: report.date,
						status: report.status,
						name: report.customer.name,
						surname: report.customer.surname
					}));
				}
			});

			this.dataSourceReport = new MatTableDataSource<FilterReport>(this.olderReports);
			setTimeout(() => {
				this.dataSourceReport.paginator = this.paginator;
				this.dataSourceReport.sort = this.sort;
			});
			this.olderReports = [];
		});
	}

	applyFilter(filterValue: string) {

		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSourceReport.filter = filterValue;
	}

}
