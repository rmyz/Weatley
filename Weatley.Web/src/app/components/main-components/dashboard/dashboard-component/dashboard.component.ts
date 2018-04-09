import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


	tiles: any[];


	constructor() { }

	ngOnInit() {
		this.tiles = [
			{ text: 'One', cols: 3, rows: 1, color: 'lightblue' },
			{ text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
			{ text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
			{ text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
		];
	}

}
