import { Component, OnInit } from '@angular/core';
import { RoutingEnum } from '../../../../core/enums/routing-enum';

@Component({
	selector: 'app-app-management',
	templateUrl: './app-management.component.html',
	styleUrls: ['./app-management.component.scss']
})
export class AppManagementComponent implements OnInit {

	navLinks = [
		{ label: 'Services', path: RoutingEnum.APP_MANAGEMENT_SERVICES },
		{ label: 'Events', path: RoutingEnum.APP_MANAGEMENT_EVENTS },
	];

	constructor() { }

	ngOnInit() {
	}

}
