import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
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

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


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
